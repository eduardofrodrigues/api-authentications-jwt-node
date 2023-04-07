import express from 'express'
import cors from 'cors'

import publicRoutes from './routes/publicRoutes.js';
import privateRoutes from './routes/privateRoutes.js';
import privateMiddleare from './middlewares/privateRoutes.js';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(publicRoutes);
    this.server.use(privateMiddleare);
    this.server.use(privateRoutes)
  }

}

export default new App().server;