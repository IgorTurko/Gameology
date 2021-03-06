﻿declare namespace Api {

    /**
     * **********************************
     * PRODUCTS
     * **********************************
     */
    interface IWebShopHash<T> {
        [webShopId: string]: T;
    }

    interface IValueHash<T> {
        [valueName: string]: T;
    }

    interface ScrapedValues {
        title: string;
        price: number;
        manualPrice?: number;
        image: string;
        [key: string]: any;
    }

    interface ScrapeLog {
        url: string;
        scrapedAt: Date;
        error: any;
        values: IValueHash<{
            scrapedAt: Date;
            error: any;
        }>;
    }

    /**
     * Product to scrape data from.
     * Includes common info like title and identifier,
     * scraping settings (URLs on each supported shop) and
     * latest scraped data for each shop.
     */
    interface Product {
        id: string;
        title: string;
        scrapingUrls: IWebShopHash<string>;
        values?: IWebShopHash<ScrapedValues>;
        log?: IWebShopHash<ScrapeLog>;
    }

    type ProductPage = { items: Product[], totalPages: number, currentPage: number };

    /**
     * **********************************
     * WEB SHOPS
     * **********************************
     */

    /**
     * Setting for web shop scraping.
     * Includes common information like title and delivery prices and
     * scraper settings.
     */
    /**
     * Value settings for the scraping
     */
    interface ValueScrapingInfo {
        /**
         * Value type. Can be one of value "number", "string" or "relative-url".
         * Default is "string".
         */
        type?: "number" | "string" | "relativeUrl",
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
        elementSelector?: string;
        attribute?: string;
    }

    interface RegexExtractSettings {
        regex?: string;
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

    interface WebShop {
        id: string;
        isBase: boolean;
        title: string;
        scrapingSettings: ScrapingSettings;
        deliveryPrice?: number;
    }


    /**
     * **********************************
     * VALIDATION
     * **********************************
     */

    /**
     * 
     */
    interface ValidationResult {
        ok: boolean;
        errors: {
            [path: string]: string[];
        };
    }

    interface EntityValidationResult<TEntity> extends ValidationResult {
        entity: TEntity;
    }

    interface ValidationError {
        parameter: string;
        value: any;
        message: string;
    }

    /**
     * **********************************
     * POST/PUT RESPONSE
     * **********************************
     */

    /**
     * 
     */
    interface IResponse {
        ok: boolean;
    }

    interface IFailResponse extends IResponse {
        errors: {
            [path: string]: string[];
        };
    }

    interface ISuccessResponse<TEntity> extends IResponse {
        entity: TEntity;
    }

    type IPostResponse<TEntity> = IFailResponse | ISuccessResponse<TEntity>;


    /**
     * **********************************
     * AUTHENTICATION
     * **********************************
     */

    /**
     * 
     */
    interface AuthenticationCredentials {
        login: string;
        password: string;
    }

    interface IAuthenticationResponse extends IResponse {
        error: string;
    }


}