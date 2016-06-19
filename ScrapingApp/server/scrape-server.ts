/// <reference path="typings/index.d.ts"/>

import configuration from "./config";

import Database from "./data-access/db";

import MongoWebShopService from "./services/web-shop/mongo-web-shop-storage";
import WebShopService from "./services/web-shop/web-shop-service";

import MongoProductStorage from "./services/products/mongo-product-storage";
import ProductService from "./services/products/product-service";

import ScrapeService from "./services/scraping/scrape-service";
import ScrapeQueueService from "./services/scraping/scrape-queue-service";
import ScrapeSchedulerService from "./services/scraping/scrape-scheduler-service";

import { eventBus, EventNames } from "./services/event-bus";

const db = new Database();


export const productService = new ProductService(new MongoProductStorage(db));
const webShopService = new WebShopService(new MongoWebShopService(db));

const scrapeService = new ScrapeService(productService, webShopService);

const queue = new ScrapeQueueService(scrapeService, configuration.scrapingThreads, configuration.delayBetweenShopScrapingMs);
const scheduler = new ScrapeSchedulerService(queue, productService, configuration.schedules);

export function run() {

    // Re-run scraping when product data is changed.
    eventBus.on(EventNames.ProductUpdated, productId => {
        queue.enqueuePriore(productId);
    });


    if (scheduler.run())
        console.info("Scrape server running");
    else
        console.error("Error running scrape server");
}