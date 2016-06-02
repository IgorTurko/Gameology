/// <reference path="../../server/typings/index.d.ts"/>

import Database from "../../server/data-access/db";

import MongoProductStorage from "../../server/services/products/mongo-product-storage";
import ProductService from "../../server/services/products/product-service";

import MongoWebShopStorage from "../../server/services/web-shop/mongo-web-shop-storage";
import WebShopService from "../../server/services/web-shop/web-shop-service";

import JsdomScraper from "../../server/scrapers/jsdom-scraper";

const db = new Database();

const productService = new ProductService(new MongoProductStorage(db));
const webShopService = new WebShopService(new MongoWebShopStorage(db));

const jsdomScraper = new JsdomScraper();

webShopService.all()
    .then(shops => {

        return productService.all()
            .then(products => {
                products.forEach(productToScrape => {
                    console.log(`Scraping data for product ${productToScrape.title}`);
                    console.log();

                    Object.keys(productToScrape.scrapingUrls)
                        .forEach(shopId => {
                            const shop = shops.filter(s => s.id === shopId)[0];
                            const url = productToScrape.scrapingUrls[shopId];

                            if (shop.scrapingSettings.scraper !== "jsdom")
                                return;

                            jsdomScraper.scrape(url, shop.scrapingSettings.values)
                                .then(result => {
                                    console.log(`Scrapping of ${productToScrape.title} successful for shop ${shop.title}`);

                                    const out = {};
                                    Object.keys(result.values)
                                        .forEach(k => {
                                            const v = result.values[k];
                                            if (v.isSuccessful) {
                                                out[k] = v.value;
                                            }
                                            else {
                                                out[k] = { error: v.error };
                                            }
                                        });

                                    console.dir(out);
                                })
                                .catch((result: Scraping.ScrapingResult) => {
                                    console.error(`Scrapping of ${productToScrape.title} failed for shop ${shop.title}`);
                                    if (result.error) {
                                        console.error(result.error);
                                    }
                                    else {
                                        const out = Object.keys(result.values)
                                            .map(prop => ({ prop: prop, value: result.values[prop] }))
                                            .filter(a => !a.value.isSuccessful)
                                            .reduce((hash, a) => {
                                                hash[a.prop] = a.value.error;
                                                return hash;
                                            }, {});

                                        console.dir(out);
                                    }
                                });
                        });
                });
            });
    });