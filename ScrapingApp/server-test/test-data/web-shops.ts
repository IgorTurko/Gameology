/// <reference path="../../server/typings/index.d.ts" />

export const webShops: WebShops.WebShop[] =
[
    {
        id: "gameology",
        isBase: true,
        title: "Gameology",
        scrappingSettings: {
            scrapper: "Gameology"
        }
    },
    {
        id: "spieledeluxe",
        isBase: false,
        title: "Spiele-Deluxe",
        scrappingSettings: {
            scrapper: "spiele-deluxe"
        }
    },
    {
        id: "joedodgy",
        isBase: false,
        title: "Joe Dodgy",
        scrappingSettings: {
            scrapper: "joe-dodgy"
        }
    },
    {
        id: "mightyape",
        isBase: false,
        title: "Mighty Ape",
        scrappingSettings: {
            scrapper: "mighty-ape"
        }
    },
    {
        id: "unhalfbricking",
        title: "Unhalfbricking",
        isBase: false,
        scrappingSettings: {
            scrapper: "un-half-bricking"
        }
    }
];