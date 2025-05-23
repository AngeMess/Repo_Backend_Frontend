// En este archivo dentro de la carpeta routes vamos a colocar que metodos tiene la ruta "/api/products"
/*  C - Create - Post
    R - Read - Get
    U - Update - Put
    D - Delete - Delete
 */

import express from "express";
import productsController from "../controllers/productsController.js";

const router = express.Router();

router.route("/")
    .get(productsController.getProducts)
    .post(productsController.insertProducts);

router.route("/:id")
    .put(productsController.updateProduct)
    .delete(productsController.deleteProduct);

export default router;