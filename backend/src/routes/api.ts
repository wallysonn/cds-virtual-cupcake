import {ProductService} from '../services/ProductService'
import {CouponService} from '../services/CouponService'
import {sendGridMail} from '../services/SendgridMailService'
import {GoogleOAuthClientService} from '../services/GoogleOAuthClientService'
import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(403).send({message: 'Unauthorized'});
    })
    fastify.get("/products", async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const products = await ProductService.listAll();
            return reply.status(200).send(products);
        } catch (error) {
            return reply.status(400).send({message: error});
        }
    })
    fastify.post("/verify/code", async (request: FastifyRequest, reply: FastifyReply) => {

        try {

            const {code} = request.body as any
            const client = GoogleOAuthClientService.getClient()
            const result = await client.getToken(code)

            client.setCredentials(result.tokens)

            const profile = await GoogleOAuthClientService.getProfileInfo(result.tokens?.access_token as string)

            return reply.status(200).send({
                name: profile.name,
                picture: profile.picture,
            });

        } catch (error) {
            return reply.status(400).send({message: error});
        }

    })

    fastify.post("/verify/coupon", async (request: FastifyRequest, reply: FastifyReply) => {

        try {

            const {code} = request.body as any
            const coupon = await CouponService.findByCode(code)
            if (!coupon) throw Error("Cupom não encontrado")

            return reply.status(200).send({
                discount: coupon.discount,
            });

        } catch (error) {
            return reply.status(400).send({message: error});
        }

    })

    fastify.post("/send_contact", async (request: FastifyRequest, reply: FastifyReply) => {
        try {

            const {name, email, message} = request.body as any

            const msg = `Oi ${name}.<br>Obrigado por entrar em contato conosco!<br><br>Sua mensagem:<br>${message}<br><br>`

            let send = await sendGridMail()
                .to(email)
                .subject("Contato de Cupcake Store")
                .content(msg)
                .send()
            if (!send) throw Error("Ocorreu um erro ao enviar o e-mail")

        } catch (err) {
            return reply.status(400).send({message: err});
        }
    })
}