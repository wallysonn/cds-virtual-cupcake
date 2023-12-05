import { ProductService } from '../services/ProductService'

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
}