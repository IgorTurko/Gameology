/// <reference path="../../server/typings/index.d.ts" />

export const webShops: WebShops.WebShop[] =
[
    {
        id: "gameology",
        isBase: true,
        title: "Gameology",
        scrapingSettings: {
            scraper: "jsdom",
            values: {
                title: {
                    type: "string",
                    elementSelector: "h1[itemprop='name']"
                },
                price: {
                    type: "number",
                    elementSelector: "#ProductPrice"
                },
                image: {
                    type: "string",
                    elementSelector: "#ProductPhotoImg",
                    valueSelector: "@src"
                }
            }
        }
    },
    {
        id: "spieledeluxe",
        isBase: false,
        title: "Spiele-Deluxe",
        scrapingSettings: {
            scraper: "jsdom",
            values: {
                title: {
                    type: "string",
                    elementSelector: "h1[itemprop='name']"
                },
                price: {
                    type: "number",
                    elementSelector: "span[itemprop='price']",
                    valueSelector: "@content"
                },
                image: {
                    type: "string",
                    elementSelector: "img[itemprop='image']",
                    valueSelector: "@src"
                }
            }
        }
    },
    {
        id: "joedodgy",
        isBase: false,
        title: "Joe Dodgy",
        scrapingSettings: {
            scraper: "jsdom",
            values: {
                title: {
                    type: "string",
                    elementSelector: "meta[itemprop='name']",
                    valueSelector: "@content"
                },
                price: {
                    type: "number",
                    elementSelector: "#productPrices"
                },
                image: {
                    type: "string",
                    elementSelector: "meta[itemprop='image']",
                    valueSelector: "@content"
                }
            }
        }
    },
    {
        id: "mightyape",
        isBase: false,
        title: "Mighty Ape",
        scrapingSettings: {
            scraper: "jsdom",
            values: {
                title: {
                    type: "string",
                    elementSelector: "span[itemprop='name']"
                },
                price: {
                    type: "number",
                    elementSelector: "span[itemprop='price']",
                    valueSelector: "@content"
                },
                image: {
                    type: "string",
                    elementSelector: ".main-image img",
                    valueSelector: "@src"
                }
            }
        }
    },
    {
        id: "unhalfbricking",
        title: "Unhalfbricking",
        isBase: false,
        scrapingSettings: {
            scraper: "regex",
            values: {
                title: {
                    type: "string",
                    elementSelector: "<font.*?>(.*?)<\/font>"
                },
                price: {
                    type: "number",
                    elementSelector: "\(\$(.*?)\)"
                },
                image: {
                    type: "string",
                    elementSelector: '<img.*?src="(.*?)".*?\>'
                }
            }
        }
    }
];