﻿/// <reference path="../../server/typings/index.d.ts" />

export const webShops: Api.WebShop[] =
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
                    elementSelector: "meta[property='og:price:amount']",
                    attribute: "content"
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
                    elementSelector: "meta[property='og:title']",
                    attribute: "content"
                }],
                price: [{
                    type: "number",
                    extract: "regex",
                    regex: "for \\$([\\d.]*) at"
                }],
                image: [{
                    type: "string",
                    elementSelector: "meta[property='og:image']",
                    attribute: "content"
                }]
            }
        },
        // {
        //     id: "unhalfbricking",
        //     title: "Unhalfbricking",
        //     isBase: false,
        //     scrapingSettings: {
        //         title: [{
        //             type: "string",
        //             extract: "regex",
        //             regex: "<font.*?>(.*?)<\\/font>"
        //         }],
        //         price: [{
        //             type: "number",
        //             extract: "regex",
        //             regex: "\\(\\$([\\d\\.]*?)\\)"
        //         }],
        //         image: [{
        //             type: "relativeUrl",
        //             extract: "regex",
        //             regex: '<img.*?src="(.*?images/games/.*?)".*?\\>'
        //         }]
        //     }
        // },
        {
            id: "dungeoncrawl",
            title: "Dungeon Crawl",
            isBase: false,
            scrapingSettings: {
                title: [{
                    type: "string",
                    elementSelector: "h1[itemprop='name']"
                }],
                price: [{
                    type: "number",
                    elementSelector: "div.productprice.productpricetext[itemprop='price']"

                }],
                image: [{
                    type: "relativeUrl",
                    elementSelector: "meta[property='og:image'][content*='/assets/full']",
                    attribute: "content"
                }]
            }
        }
    ];