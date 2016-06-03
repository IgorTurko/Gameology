declare namespace Api {

    interface IWebShopHash<T> {
        [webShopId: string]: T;
    }

    interface IValueHash<T> {
        [valueName: string]: T;
    }

    interface ScrapedValues {
        title: string;
        price: number;
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