﻿/// <reference path="../../typings/index.d.ts"/>

import * as async from "async";

import ScrapeService from "./scrape-service";

export default class ScrapeQueueService {
    private queue: AsyncQueue<string>;

    constructor(private scrapeService: ScrapeService, scrapingThreads: number, delayBetweenProductScraping: number) {
        if (!scrapeService)
            throw new Error("scrapeService is missing");

        this.queue = async.queue((productId: string, callback) => {
            console.log(`Scraping data for product ${productId}`);

            this.scrapeService.scrapeProductData(productId)
                .then(res => {
                    Object.keys(res)
                        .forEach(webShop => {
                            const result = res[webShop];
                            if (result.isSuccessful)
                                console.log(`Scraping product ${productId} from shop ${webShop} completed successfuly`);
                            else {
                                console.error(`Scraping product ${productId} from shop ${webShop} failed`);
                                console.error(result.error);
                            }
                        });

                    setTimeout(callback, delayBetweenProductScraping);
                })
                .catch(err => callback(err));

        }, scrapingThreads);
    }

    /**
     * Enqueues scraping data and saving results for a product.
     * Method returns a promise which will be resolved when processing finishes.     
     */
    enqueue(productId: string): Promise<string> {
        if (!productId)
            throw new Error("productId is undefined");

        return new Promise((resolve, reject) => {
            this.queue.push(productId, err => {
                if (err)
                    reject(err);
                else
                    resolve(productId);
            });
        });
    }

    /**
     * Enqueues scraping data and saving results for a product before other enqueued products.
     * Method returns a promise which will be resolved when processing finishes.     
     */
    enqueuePriore(productId: string) {
        if (!productId)
            throw new Error("productId is undefined");

        return new Promise((resolve, reject) => {
            this.queue.unshift(productId, err => {
                if (err)
                    reject(err);
                else
                    resolve(productId);
            });
        });
    }
}