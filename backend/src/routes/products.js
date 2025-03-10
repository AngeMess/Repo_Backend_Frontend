// En este archivo dentro de la carpeta routes vamos a colocar que metodos tiene la ruta "/api/products"
/*  C - Create - Post
    R - Read - Get
    U - Update - Put
    D - Delete - Delete
 */

import express from "express";

const router = express.Router();

router.route("/")
    .get()
    .post()
    .put()
    .delete();

export default router;