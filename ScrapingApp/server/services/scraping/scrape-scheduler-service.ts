/// <reference path="../../typings/index.d.ts" />

import * as schedule from "node-schedule";
import * as uuid from "node-uuid";

import ScrapeQueueService from "./scrape-queue-service";
import ProductService from "../products/product-service";

export default class ScrapeSchedulerService {
    constructor(private queue: ScrapeQueueService,
                private productService: ProductService,
                private schedules: string[]) {
        if (!queue)
            throw new Error("queue is undefined");
        if (!productService)
            throw new Error("productService is undefined");
        if (!schedules && !schedules.length)
            throw new Error("schedules is undefined or empty");
    }

    run(): boolean {
        if (schedule.scheduledJobs && Object.keys(schedule.scheduledJobs).length)
            return false;

        this.schedules
            .map(rule => schedule.scheduleJob(uuid.v1(),
                rule,
                () => {
                    console.log(`${new Date()} Running product scraping for scheduler rule ${rule}`);

                    this.productService
                        .all()
                        .then(products => {
                            products.forEach(p => this.queue.enqueue(p.id));
                        });
                }));

        return true;
    }
}