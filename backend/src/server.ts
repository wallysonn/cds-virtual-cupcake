import Fastify from 'fastify';
import cors from '@fastify/cors';
import {routes} from "./routes/api";

const app = Fastify({logger: true});
const start = async () => {

    await app.register(cors)
    await app.register(routes, {prefix: '/api'});

    try {
        await app.listen({
            port: (process.env.PORT || 4000) as number,
        });
    } catch (err) {
        process.exit(1)
    }
}

start().then(r => console.log(r))