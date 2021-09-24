import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

// Crear usuario requiere de Verificacion de Token, si es Admin y que no se duplique el Email
router.post("/", [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkDuplicateUsernameOrEmail], usersCtrl.createUser);

export default router;
