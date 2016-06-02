declare interface Configuration {
    fallbackPort: number;
    mongoUrl: string;
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
         * Default true.
         */
        isOptional?: boolean;

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

    interface ScrapingResult {
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
        scrape(url: string, values: ScrapingSettings): Promise<ScrapingResult>;
    }

    /**
     * Converts a value to specified type.
     */
    interface ValueParser {
        /**
         * Converts a value to a specified format.
         * Returns promise wich resolves with value on parsing success or fails with error message.
         * 
         */
        (input: string): any;
    }

    interface IValueParserHash {
        [parser: string]: ValueParser;
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
     * Product to scrape data from.
     * Includes common info like title and identifier,
     * scraping settings (URLs on each supported shop) and
     * latest scraped data for each shop.
     */
    interface Product {
        id: string;
        title: string;
        scrapingUrls?: {
            [webShopId: string]: string;
        };
        scrapedData?: {
            [webShopId: string]: {
                url: string;
                scrapedAt: Date;
                values: {
                    title: string;
                    price: number;
                    image: string;
                    [key: string]: any;
                };
            };
        };
    }

    /**
    * Persistent storage for web shop.
    */
    interface IProductStorage {
        all(): Promise<Product[]>;

        one(id: string): Promise<Product>;

        save(product: Product): Promise<Product>;
    }
}

declare namespace Validator {

    interface ValidationResult {
        isValid: boolean;
        errorCount: number;
        errors: ValidationError[];
    }

    interface ValidationError {
        parameter: string;
        value: any;
        message: string;
    }
}