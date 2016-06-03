/// <reference path="../typings/index.d.ts"/>

import * as express from "express";

import Db from "../data-access/db";
import MongoProductStorage from "../services/products/mongo-product-storage";
import ProductService from "../services/products/product-service";

const db = new Db();

const productService = new ProductService(new MongoProductStorage(db)); 

const router = express.Router();

router.get("/", (req, res) => {
    productService.all()
        .then(products => res.json(products))
        .catch(err => res.send(500, err).end()); 
});

export default router;