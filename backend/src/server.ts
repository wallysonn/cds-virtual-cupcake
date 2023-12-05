// import express from 'express';
// import bodyParser from "body-parser";
// import db from './db';
//
//
// //import routes
// import apiRoutes from './routes/api';
//
// const app = express();
// const port: number = 4000;
//
// app.use('/api', apiRoutes);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
//
// app.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`);
// });

import Fastify from 'fastify';
import cors from '@fastify/cors';
import {routes} from "./routes/api";

const app = Fastify({logger: true});
const start = async () => {

    await app.register(cors)
    await app.register(routes, {prefix: '/api'});

    try {
        await app.listen({
            port: 4000,
        });
    } catch (err) {
        process.exit(1)
    }
}

start().then(r => console.log(r))