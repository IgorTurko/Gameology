/// <reference path="../typings/index.d.ts" />

import ProductService from "./products/product-service";
import WebShopService from "./web-shop/web-shop-service";

import JsdomScraper from "../scrapers/jsdom-scraper";

interface WebShopHash {
    [webShopId: string]: Api.WebShop;
}

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

        return this.webShops.then(shops => {
            return this.productService.one(productId)
                .then(product => Promise.all(this.scrapeProduct(product, shops))
                    .then(results => results.toHash(e => e.webShopId, e => e.scrapingResult)));
        });
    }

    private scrapeProduct(product: Api.Product, shops: WebShopHash): Promise<{ webShopId: string; scrapingResult: Scraping.WebShopScrapingResult; }>[] {

        return Object.keys(product.scrapingUrls)
            .map(webShopId => this.scrapeProductFromShopAndSave(product, webShopId, shops)
                .then(productScrapeResult => ({
                    webShopId: webShopId,
                    scrapingResult: productScrapeResult
                })));
    }

    private scrapeProductFromShopAndSave(product: Api.Product, webShopId: string, shops: WebShopHash): Promise<Scraping.WebShopScrapingResult> {
        return this.scraper
            .scrape(product.scrapingUrls[webShopId], shops[webShopId].scrapingSettings)
            .then(result => this.productService
                .updateScrapedData(product.id, webShopId, result)
                .then(() => result));
    }
}