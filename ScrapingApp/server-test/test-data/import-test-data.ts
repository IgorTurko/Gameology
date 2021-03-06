﻿/// <reference path="../../server/typings/index.d.ts" />

import Database from "../../server/data-access/db";

import MongoWebShopStorage from "../../server/services/web-shop/mongo-web-shop-storage";
import WebShopService from "../../server/services/web-shop/web-shop-service";

import MongoProductStorage from "../../server/services/products/mongo-product-storage";
import ProductService from "../../server/services/products/product-service";

import { webShops } from "./web-shops";
import { products } from "./products";

const db = new Database();

const webShopService = new WebShopService(new MongoWebShopStorage(db));
const productService = new ProductService(new MongoProductStorage(db));

function addWebShop(webShop: Api.WebShop): Promise<any> {
    return webShopService.put(webShop)
        .then(res => {
            if (res["isValid"] === undefined) {
                const index = webShops.indexOf(webShop);
                if (index !== webShops.length - 1) {
                    return addWebShop(webShops[index + 1]);
                }
            } else {
                console.error(`Error adding web shop ${webShop.title}`);
                console.dir(res);
            }
        })
        .catch(err => {
            console.error(`Error adding web shop ${webShop.title}`);
            console.error(err);
        });
}

function addProduct(product: Api.Product): Promise<any> {
    return productService.save(product)
        .then(() => {
            console.info(`Product ${product.title} added.`);

            const index = products.indexOf(product);
            if (index !== products.length - 1) {
                return addProduct(products[index + 1]);
            }
        })
        .catch(err => {
            console.error(`Error adding product ${product.title}`);
            console.error(err);
        });
}

addWebShop(webShops[0])
    .then(() => {
        return addProduct(products[0]);
    })
    .then(() => {
        console.info("Test data added.");
        process.exit();
    });