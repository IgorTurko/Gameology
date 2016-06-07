/// <reference path="../typings/index.d.ts"/>

import { EventEmitter } from "events";

class EventNames {
    /**
     * Published when product inserted or updated.
     * Params is product id: string.
     */
    static ProductUpdated = "product-updated";
    /**
     * Published when product data is scraped.
     * Param is product id: string.
     */
    static ProductScraped = "product-scraped";
}

const eventBus = new EventEmitter();

export { eventBus, EventNames };