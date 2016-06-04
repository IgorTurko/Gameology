/// <reference path="../../../api.d.ts"/>

declare interface Configuration {
    fallbackPort: number;
    mongoUrl: string;
    scrapingThreads: number;
}

/**
 * Array extension
 */
declare interface Array<T> {
    toHash<K>(keySelector: (elem: T) => string, valueSelector?: (elem: T) => K): { [key: string]: K; };
}

declare interface ObjectConstructor {
    entries(obj: any): any[][];
}


declare namespace Authentication {

    interface AuthenticationInfo {
        token: string;
        userId: string;
        expiresAt: Date;
    }

    interface IAuthenticationTokenProvider {
        /**
         * Validates given authentication token and returns authentication information.
         * If token is not valid resulting promise will be rejected.
         * 
         */
        validate(authenticationToken: string): Promise<AuthenticationInfo>;

        /**
         * Generates and stores authentication info for specified user.
         * 
         */
        generate(userId: string): Promise<AuthenticationInfo>;
    }

    interface IAuthenticationTokenStorage {

        find(authenticationToken: string): Promise<AuthenticationInfo>;

        save(authenticationInfo: AuthenticationInfo): Promise<AuthenticationInfo>;

        remove(authenticationToken: string): Promise<any>;
    }
}

declare namespace Scraping {

    /**
     * Value settings for the scraping
     */
    interface ValueScrapingInfo {
        /**
         * Value type. Can be one of value "number", "string" or "relative-url".
         * Default is "string".
         */
        type?: "number" | "string",
        /**
         * Boolean value indicates whether failing of value scraping leads to total scraping fail.
         * Default false.
         */
        failOnError?: boolean;

        /**
         * How the value is extracted.
         * There are two supported modes:
         * - queryselector uses document.querySelector() method for finding element
         * - regex - uses regular expression on document.innerHTML to capture data.
         *
         * Default mode is queryselector.
         */
        extract?: "queryselector" | "regex";
    }

    interface QuerySelectorExtractSettings {
        elementSelector: string;
        attribute?: string;
    }

    interface RegexExtractSettings {
        regex: string;
    }

    type ValueScrapingSettings = ValueScrapingInfo & (QuerySelectorExtractSettings | RegexExtractSettings);

    /**
     * Scraping settings defines how to extract data from pages of specified type.
     * Scraping settings is hash of value name and array of scraping settings.
     *
     * Each key in hash corresponds to scraped value.
     * Scraping settings for value is array of objects.
     *
     * Scraper will try to extract value with each of setting.
     * If extracting would be successful the next settings will not be tested.
     *
     * If any setting has failOnError === true and scraping would fail for this setting the value scraping would be error.
     * Usually the last setting only should set failOnError to true.
     */
    interface ScrapingSettings {
        title: ValueScrapingSettings[];
        price: ValueScrapingSettings[];
        image: ValueScrapingSettings[];
        [valueName: string]: ValueScrapingSettings[];
    }

    interface ScrapingError {
        errorMessage: string;
        attemptedValue: string;
    }

    interface ValueScrapingResult {
        value: any;
        isSuccessful: boolean;
        error: any;
        /**
         * First setting correctly parses a document.
         */
        settings: ValueScrapingSettings;
    }

    interface WebShopScrapingResult {
        isSuccessful: boolean;
        error: any;
        values: {
            [valueName: string]: ValueScrapingResult;
        };
    }

    /**
     * Scraper contract.
     */
    interface IScraper {
        /**
         * Scrapes a data from a specified URL.
         * Method returns a promise which resolves or rejects with ScrapingResult.
         * Promise resolves if scraping on success or rejects on scraping error with the same value.
         * Scraping fails if error occured or if any non-optional value scraping fails.
         * 
         * @param url Url to scrape data from.
         * @param values Settings for scraping individual values from the page.
         * @returns Promise which resolves or rejects with ScrapingResult.
         */
        scrape(url: string, values: ScrapingSettings): Promise<WebShopScrapingResult>;
    }

    interface ProductScrapeResult {
        [webShopId: string]: WebShopScrapingResult;
    }

    interface IScrapeService {
        /**
         * Scrapes product data for all shops and saves scraping result.
         */
        scrapeProductData(productId: string): Promise<ProductScrapeResult>;
    }
}

declare namespace WebShops {
    /**
     * Setting for web shop scraping.
     * Includes common information like title and delivery prices and
     * scraper settings.
     */
    interface WebShop {
        id: string;
        isBase: boolean;
        title: string;
        scrapingSettings: Scraping.ScrapingSettings;
        delivery?: Array<{
            deliveryMethod: string;
            price: number;
        }>;
    }

    /**
     * Persistent storage for web shop.
     */
    interface IWebShopStorage {
        all(): Promise<WebShop[]>;

        one(id: string): Promise<WebShop>;

        save(webShop: WebShop): Promise<WebShop>;
    }
}

declare namespace Products {
    
    /**
    * Persistent storage for web shop.
    */
    interface IProductStorage {
        all(): Promise<Api.Product[]>;

        one(id: string): Promise<Api.Product>;

        save(product: Api.Product): Promise<Api.Product>;

        setScrapingData(productId: string, webShopId: string, values: Api.ScrapedValues, log: Api.ScrapeLog): Promise<Api.Product>;
    }
}