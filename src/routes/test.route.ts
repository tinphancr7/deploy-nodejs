import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default async function testRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', async (request, reply) => {
    reply.sends({
      message: 'Hello from test route 1!'
    })
  })
}
