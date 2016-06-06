/// <reference path="../typings/index.d.ts"/>
import WebShop = Api.WebShop;

export default class ShopRepository {
    getAllShops(): Promise<WebShop[]> {
        return fetch('/api/shops')
            .then(response => response.json())
            .then(json => json as WebShop[], err => console.log('error'));
    };
}