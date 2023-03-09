import { Router } from "express";

const routes = new Router();

import UserController from "./controllers/UserController.js";
import PublicController from "./controllers/PublicController.js";


routes.get('/', PublicController.root)

//Users
routes.post('/users/create', UserController.createUser);
routes.get('/users/list', UserController.listUsers)

export default routes
