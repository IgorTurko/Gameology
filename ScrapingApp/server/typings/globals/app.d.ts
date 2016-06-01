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
        elementSelector: string;
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