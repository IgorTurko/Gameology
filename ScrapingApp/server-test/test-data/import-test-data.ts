/// <reference path="../../server/typings/index.d.ts" />

import Database from "../../server/data-access/db";
import MongoWebShopStorage from "../../server/services/web-shop/mongo-web-shop-storage";
import WebShopService from "../../server/services/web-shop/web-shop-service";

import { webShops } from "./web-shops";

const db = new Database();

const webShopService = new WebShopService(new MongoWebShopStorage(db));

function addWebShop(webShop: WebShops.WebShop) {
    webShopService.save(webShop)
        .then(() => {
            console.info(`Web shop ${webShop.title} added.`);

            const index = webShops.indexOf(webShop);
            if (index !== webShops.length - 1) {
                addWebShop(webShops[index + 1]);
            }
        })
        .catch(err => {
            console.error("Error adding web shop storage");
            console.error(err);
        });
}

addWebShop(webShops[0]);


