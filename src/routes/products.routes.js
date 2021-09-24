import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/products.controller";
import { authJwt } from "../middlewares";

router.get("/", productsCtrl.getProducts);

// CONSULTAR un producto NO necesita verificacion
router.get("/:productId", productsCtrl.getProductById);

// INSERTAR de nuevos productos necesita verificacion de Token y del Rol Caja
router.post("/", [authJwt.verifyToken, authJwt.isCaja], productsCtrl.createProduct);

// ACTUALIZAR un producto necesita verificacion de Token y del Rol Caja
router.put("/:productId", [authJwt.verifyToken, authJwt.isCaja], productsCtrl.updateProductById);

// ELIMINAR un producto necesita verificacion de Token y del Rol Admin
router.delete("/:productId", [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.deleteProductById);

export default router;
