/// <reference path="../../server/typings/index.d.ts"/>

import Database from "../../server/data-access/db";

import MongoProductStorage from "../../server/services/products/mongo-product-storage";
import ProductService from "../../server/services/products/product-service";

import JsdomScraper from "../../server/scrapers/jsdom-scraper";

const db = new Database();
const productService = new ProductService(new MongoProductStorage(db));

const jsdom = new JsdomScraper();

productService.all()
    .then(products => {
        const productToScrape = products[0];



    });