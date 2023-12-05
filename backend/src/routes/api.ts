import { ProductService } from '../services/ProductService'
import { GoogleOAuthClientService } from '../services/GoogleOAuthClientService'

import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply  } from 'fastify'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(403).send({ message: 'Unauthorized' });
    })
    fastify.get("/products", async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const products = await ProductService.listAll();
            return reply.status(200).send(products);
        } catch (error) {
            return reply.status(400).send({ message: error });
        }
    })
    fastify.post("/verify/code", async (request: FastifyRequest, reply: FastifyReply) => {

        try {

            const { code } = request.body as any
            const client = GoogleOAuthClientService.getClient()
            const result = await client.getToken(code)

            client.setCredentials(result.tokens)

            const profile = await GoogleOAuthClientService.getProfileInfo(result.tokens?.access_token as string)

            return reply.status(200).send({
                name: profile.name,
                picture: profile.picture,
            });

        } catch(error) {
            return reply.status(400).send({ message: error });
        }

    })
}