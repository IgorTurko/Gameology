/// <reference path="../typings/index.d.ts"/>
import WebShop = Api.WebShop;
import HttpClient from './http-client'; 

export default class ShopRepository {
    private httpClient = new HttpClient();

    getAllShops(): Promise<WebShop[]> {
        return this.httpClient.get('/api/shops');
    };
}