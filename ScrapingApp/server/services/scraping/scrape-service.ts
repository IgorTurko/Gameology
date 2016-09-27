/// <reference path="../../typings/index.d.ts" />
import ProductService from "../products/product-service";
import WebShopService from "../web-shop/web-shop-service";

import JsdomScraper from "../../scrapers/jsdom-scraper";

import { eventBus, EventNames } from "../event-bus";

interface WebShopHash {
    [webShopId: string]: Api.WebShop;
}

const emptyScrapedValues: Api.ScrapedValues = {
    title: null,
    price: null,
    image: null
};

export default class ScrapeService implements Scraping.IScrapeService {
    private scraper = new JsdomScraper();
    private webShops: Promise<WebShopHash>;

    constructor(private productService: ProductService,
        private webShopService: WebShopService) {
        if (!productService)
            throw new Error("productService is undefined");
        if (!webShopService)
            throw new Error("webShopService is undefined");

        this.webShops = this.webShopService
            .all()
            .then(shops => shops.toHash(s => s.id));
    }

    scrapeProductData(productId: string): Promise<Scraping.ProductScrapeResult> {
        if (!productId)
            throw new Error("productId is undefined");

        return Promise.all([
            this.webShops,
            this.productService.one(productId)
        ])
        .then(([shops, product]) => Promise.all(this.scrapeProduct(product, shops)))
        .then(r => r.toHash(e => e.webShopId, e => e.scrapedValues))
        .then(hash => {
            eventBus.emit(EventNames.ProductScraped, productId);
            return hash;
        });
    }

    private scrapeProduct(product: Api.Product, shops: WebShopHash): Promise<{ webShopId: string; scrapedValues: Api.ScrapedValues; }>[] {

        return Object.keys(product.scrapingUrls)
                     .map(webShopId => this.scrapeProductFromShopAndSave(product, webShopId, shops)
                                           .then(scrapedValues => ({ webShopId, scrapedValues })));
    }

    private scrapeProductFromShopAndSave(product: Api.Product, webShopId: string, shops: WebShopHash): Promise<Api.ScrapedValues> {
        return this.scraper
            .scrape(product.scrapingUrls[webShopId], shops[webShopId].scrapingSettings)
            .then(scrapedValues => this.productService
                                        .updateScrapedData(product.id, webShopId, scrapedValues)
                                        .then(() => scrapedValues),
                  err => this.productService
                             .updateScrapedData(product.id, webShopId, emptyScrapedValues)
                             .then(() => emptyScrapedValues));
    }
}