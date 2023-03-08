import { Router } from "express";

const routes = new Router();

routes.get('/', (request, response) => {
  response.send('Olá Mundo!')
})

export default routes