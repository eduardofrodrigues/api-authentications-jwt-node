import { Router } from "express";

import PrivateAppController from "../controllers/PrivateAppController.js";

const privateRoutes = new Router();

//Private app endpoints
privateRoutes.get('/app/', PrivateAppController.privateHome)

export default privateRoutes;