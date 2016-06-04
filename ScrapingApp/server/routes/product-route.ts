/// <reference path="../typings/index.d.ts"/>

import * as express from "express";

import Db from "../data-access/db";
import MongoProductStorage from "../services/products/mongo-product-storage";
import ProductService from "../services/products/product-service";

const db = new Db();

const productService = new ProductService(new MongoProductStorage(db)); 

const router = express.Router();

router.get("/:id", (req, res) => {
    const productId = req.param("id");

    if (!productId) {
        res.send(404, "Not found")
            .end();
        return;
    }


    productService.one(productId)
        .then(product => res.json(product))
        .catch(err => res.send(404, "Not found").end());
});

router.get("/", (req, res) => {
    productService.all()
        .then(products => res.json(products))
        .catch(err => res.send(500, err).end()); 
});

router.post("/", (request, response) => {
    const product = request.body;

    productService.save(product)
        .then(result => {
            if (result["isValid"] === false) {
                const validationResult = <Api.ValidationResult>result;

                const failResponse: Api.IFailResponse = {
                    ok: false,
                    errors: validationResult.errors
                };

                response.json(failResponse).end();
            }
            else {
                const updatedProduct = <Api.Product>result;
                const okResponse: Api.ISuccessResponse<Api.Product> = {
                    ok: true,
                    entity: updatedProduct
                };

                response.json(okResponse).end();
            }
        });

});

export default router;