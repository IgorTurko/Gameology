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
     * Configures how the value should be extracted from the document.
     * element selector specifies CSS selector used to get element with value.
     * value selector defines how to get value string from a selected element:
     * - if valueSelector is not specified the value is got from elements text
     * - if valueSelector started from @attribute the value is got from element's attribute 
     */
    interface ValueExtractingSettings {
        /**
         * Value type. Can be one of value "number", "string" or "relative-url".
         * Default is "string".
         */
        type?: "number" | "string" | "relative-url",
        /**
         * Boolean value indicates whether failing of value scraping leads to total scraping fail.
         * Default true.
         */
        isOptional?: boolean;
        /**
         * Selector for element contains required data. Could be CSS for jsdom scraper or regex string for regex scraper.
         */
        elementSelector: string;
        /**
         * Optional selector for value. Used by jsdom scraper if required data is in attribute.
         */
        valueSelector?: string;
    }

    /**
     * Scraping settings defines how to extract data from pages of specified type.
     */
    interface ScrapingSettings {
        scraper?: string;
        values: {
            title: ValueExtractingSettings;
            price: ValueExtractingSettings;
            image: ValueExtractingSettings;
            [valueName: string]: ValueExtractingSettings;
        }
    }

    interface ScrapingError {
        errorMessage: string;
        attemptedValue: string;
    }
    
    interface ScrapingResult {
        isSuccessful: boolean;
        values: { [valueName: string]: any };
        error: string;
        valueErrors: {
            [valueName: string]: ScrapingError;
        }
    }

    /**
     * Scraper contract.
     */
    interface IScraper {
        /**
         * Name of the scraper. Used to match name from scraping settings.
         */
        name: string;
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
        scrape(url: string, values: { [valueName: string]: ValueExtractingSettings }): Promise<ScrapingResult>;
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