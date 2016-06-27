/// <reference path="../../typings/index.d.ts"/>

import * as express from "express";

import Db from "../../data-access/db";
import MongoProductStorage from "../../services/products/mongo-product-storage";
import ProductService from "../../services/products/product-service";

const db = new Db();

const productService = new ProductService(new MongoProductStorage(db));

const router = express.Router();

router.get("/:id", (req, res) => {
    const productId = (req.params || {})["id"];

    if (!productId) {
        res.send(404, "Not found")
            .end();
        return;
    }


    productService.one(productId)
        .then(product => res.json(product))
        .catch(err => res.send(404, "Not found").end());
});

router.delete("/:id", (req, res) => {
    const productId = (req.params || {})["id"];

    if (!productId) {
        res.send(404, "Not found").end();
        return;
    }

    productService.delete(productId)
        .then(() => res.json(200, "OK").end())
        .catch(err => res.send(500, err).end());
});

router.get("/", (req, res) => {
    productService.all()
        .then(products => res.json(products))
        .catch(err => res.send(500, err).end());
});

router.post("/", (request, response) => {
    const product = request.body;

    productService.save(product)
        .then(product => {
            const responseData: Api.IPostResponse<Api.Product> = {
                ok: true,
                entity: product
            };

            response.json(responseData).end();
        })
        .catch(err => {
            const responseData: Api.IFailResponse = {
                ok: false,
                errors: err
            };

            response.json(responseData).end();
        });
});

export default router;