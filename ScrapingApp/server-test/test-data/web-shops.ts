/// <reference path="../../server/typings/index.d.ts" />

export const webShops: WebShops.WebShop[] =
[
    {
        id: "gameology",
        isBase: true,
        title: "Gameology",
        scrapingSettings: {
            title: [{
                type: "string",
                elementSelector: "h1[itemprop='name']"
            }],
            price: [{
                type: "number",
                elementSelector: "#ProductPrice"
            }],
            image: [{
                type: "string",
                elementSelector: "#ProductPhotoImg",
                attribute: "src"
            }]
        }
    },
    {
        id: "spieledeluxe",
        isBase: false,
        title: "Spiele-Deluxe",
        scrapingSettings: {
            title: [{
                type: "string",
                elementSelector: "h1[itemprop='name']"
            }],
            price: [{
                type: "number",
                elementSelector: "span[itemprop='price']",
                attribute: "content"
            }],
            image: [{
                type: "string",
                elementSelector: "img[itemprop='image']",
                attribute: "src"
            }]
        }
    },
    {
        id: "joedodgy",
        isBase: false,
        title: "Joe Dodgy",
        scrapingSettings: {
            title: [{
                type: "string",
                elementSelector: "meta[itemprop='name']",
                attribute: "content"
            }],
            price: [{
                type: "number",
                elementSelector: "#productPrices"
            }],
            image: [{
                type: "string",
                elementSelector: "meta[itemprop='image']",
                attribute: "content"
            }]
        }
    },
    {
        id: "mightyape",
        isBase: false,
        title: "Mighty Ape",
        scrapingSettings: {
            title: [{
                type: "string",
                elementSelector: "span[itemprop='name']"
            }],
            price: [{
                type: "number",
                elementSelector: "span[itemprop='price']",
                attribute: "content"
            }],
            image: [{
                type: "string",
                elementSelector: ".main-image img",
                attribute: "@src"
            }]
        }
    },
    {
        id: "unhalfbricking",
        title: "Unhalfbricking",
        isBase: false,
        scrapingSettings: {
            title: [{
                type: "string",
                extract: "regex",
                regex: "<font.*?>(.*?)<\/font>"
            }],
            price: [{
                type: "number",
                extract: "regex",
                regex: "\(\$(.*?)\)"
            }],
            image: [{
                type: "string",
                extract: "regex",
                regex: '<img.*?src="(.*?)".*?\>'
            }]
        }
    }
];