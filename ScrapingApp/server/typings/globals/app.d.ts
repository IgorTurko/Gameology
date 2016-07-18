/// <reference path="../../../api.d.ts"/>

/**
 * Application configuration.
 */
interface Configuration {
    /** Web server port would be used if environment variable doesn't set a port. */
    fallbackPort: number;
    /** Mongo connection URL */
    mongoUrl: string;
    /** Maximum number of concurrently running scraping functions */
    scrapingThreads: number;
    /** Array of cron format schedules which whould be used for run scraping */
    schedules: string[];
    /** Delay in milliseconds after scraping each product. */
    delayBetweenShopScrapingMs: number;
}

/**
 * Array extension
 */
interface Array<T> {
    toHash<K>(keySelector: (elem: T) => string, valueSelector?: (elem: T) => K): { [key: string]: K; };
    min<K>(selector: (elem: T) => K): T;
    max<K>(selector: (elem: T) => K): T;
}

interface ObjectConstructor {
    entries(obj: any): any[][];
    assign(target: any, ...sources: any[]): any;
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

    interface ParserContext {
        location: {
            hash: string;
            host: string;
            hostname: string;
            href: string;
            origin: string;
            pathname: string;
            port: string;
            protocol: string;
            search: string;
        };
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
        settings: Api.ValueScrapingSettings;
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
        scrape(url: string, values: Api.ScrapingSettings): Promise<WebShopScrapingResult>;
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
     * Persistent storage for web shop.
     */
    interface IWebShopStorage {
        all(): Promise<Api.WebShop[]>;

        one(id: string): Promise<Api.WebShop>;

        /**
         * Updates editable properties in existing web shop document.
         */
        save(webShop: Api.WebShop): Promise<Api.WebShop>;

        /**
         * Inserts or updates the whole web shop document.
         * Use in test data init only.
         */
        put(webShop: Api.WebShop): Promise<Api.WebShop>;
    }
}

declare namespace Products {

    /**
    * Persistent storage for web shop.
    */
    interface IProductStorage {
        all(): Promise<Api.Product[]>;

        one(id: string): Promise<Api.Product>;

        findByTitle(title: string): Promise<Api.Product>;

        save(product: Api.Product): Promise<Api.Product>;

        setScrapingData(productId: string, webShopId: string, values: Api.ScrapedValues, log: Api.ScrapeLog): Promise<Api.Product>;

        delete(productId: string): Promise<any>;

        discardScrapingData(productId: string, shops: string[]): Promise<any>
    }
}

declare namespace Users {

    interface UserAccount {
        userName: string;
        password: string;
        isActive: boolean;
    }

    interface IUserAccountStorage {
        findByUserName(userName: string): Promise<UserAccount>;
    }
}