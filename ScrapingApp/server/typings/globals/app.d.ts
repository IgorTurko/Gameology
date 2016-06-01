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

declare namespace WebShops {
    /**
     * Setting for web shop scrapping.
     * Includes common information like title and delivery prices and
     * scrapper settings.
     */
    interface WebShop {
        id: string;
        isBase: boolean;
        title: string;
        scrappingSettings: {
            scrapper: string;
        };
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
     * Product for scrapping data.
     * Includes common info like title and identifier,
     * scrapping settings (URLs on each supported shop) and
     * latest scrapped data for each shop.
     */
    interface Product {
        id: string;
        title: string;
        scrappingUrls?: {
            [webShopId: string]: string;
        };
        scrappedData?: {
            [webShopId: string]: {
                url: string;
                scrappedAt: Date;
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