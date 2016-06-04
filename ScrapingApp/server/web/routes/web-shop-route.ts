/// <reference path="../../typings/index.d.ts" />

import * as express from "express";

import Db from "../../data-access/db";

import MongoWebShopStorage from "../../services/web-shop/mongo-web-shop-storage";
import WebShopService from "../../services/web-shop/web-shop-service";

const db = new Db();

const webShopService = new WebShopService(new MongoWebShopStorage(db));

const router = express.Router();

router.get("/",
(request, response) => {
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

export default router;