/// <reference path="../../server/typings/index.d.ts" />

import Database from "../../server/data-access/db";

import MongoProductStorage from "../../server/services/products/mongo-product-storage";
import ProductService from "../../server/services/products/product-service";

import MongoWebShopStorage from "../../server/services/web-shop/mongo-web-shop-storage";
import WebShopService from "../../server/services/web-shop/web-shop-service";

import JsdomScraper from "../../server/scrapers/jsdom-scraper";

import ScrapeService from "../../server/services/scrape-service";

const db = new Database();

const webShopService = new WebShopService(new MongoWebShopStorage(db));
const productService = new ProductService(new MongoProductStorage(db));

const scrapeService = new ScrapeService(productService, webShopService);

function outputProductScrapeResult(scrapeResult: Scraping.ProductScrapeResult, product: Api.Product, shops: Api.WebShop[]) {
    Object.keys(scrapeResult)
        .forEach(shopId => {
            const shop = shops.filter(s => s.id === shopId)[0];
            const result = scrapeResult[shopId];

            console.log(`Scrapping of ${product.title} successful for shop ${shop.title}`);

            const out = {};
            Object.keys(result.values)
                .forEach(k => {
                    const v = result.values[k];
                    if (v.isSuccessful) {
                        out[k] = v.value;
                    } else {
                        out[k] = {
                            error: v.error
                        };
                    }
                });

            console.dir(out);
        });

}

webShopService.all()
    .then(shops => {
        return productService.all()
            .then(products => {
                const productScrapePromises = products.map(product => {
                    return scrapeService.scrapeProductData(product.id)
                        .then(productScrapeResultHash => outputProductScrapeResult(productScrapeResultHash, product, shops));
                });

                return Promise.all(productScrapePromises);
            });
    })
    .then(() => {
        console.info("Scraping completed successfully");
        process.exit();
    })
    .catch(err => {
        console.error("Scraping failed");
        console.error(err);
        process.exit();
    });