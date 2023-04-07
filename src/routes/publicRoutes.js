import { Router } from "express";

import UserController from "../controllers/UserController.js";
import PublicController from "../controllers/PublicController.js";

const publicRoutes = new Router();

publicRoutes.get('/', PublicController.root)

//Users
publicRoutes.post('/users/create', UserController.createUser);
publicRoutes.post('/users/login', UserController.loginUser);
publicRoutes.get('/users/list', UserController.listUsers)

export default publicRoutes;
