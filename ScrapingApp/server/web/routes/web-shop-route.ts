/// <reference path="../../typings/index.d.ts" />

import * as express from "express";

import Db from "../../data-access/db";

import MongoWebShopStorage from "../../services/web-shop/mongo-web-shop-storage";
import WebShopService from "../../services/web-shop/web-shop-service";

const db = new Db();

const webShopService = new WebShopService(new MongoWebShopStorage(db));

const router = express.Router();

router.get("/", (request, response) => {
    webShopService.all()
        .then(shops => {
            const model = shops.map(s => ({
                id: s.id,
                isBase: s.isBase,
                title: s.title,
                delivery: s.delivery
            }));
            response.json(model).end();
        })
        .catch(err => response.send(500, err).end());
});

router.post("/", (request, response) => {
    const webShop = request.body;

    if (!webShop.id) {
        response.send(400, "Bad request. Web shop identifier is missing").end();
    }
    else {
        webShopService.save(webShop)
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
                    const updatedWebShop = <Api.WebShop>result;
                    const okResponse: Api.ISuccessResponse<Api.WebShop> = {
                        ok: true,
                        entity: updatedWebShop
                    };

                    response.json(okResponse).end();
                }
            });
    }
});

export default router;