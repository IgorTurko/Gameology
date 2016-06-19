/// <reference path="../typings/index.d.ts"/>
import HttpClient from './http-client'; 

export default class ShopRepository {
    private httpClient = new HttpClient();

    getAllShops(): Promise<Api.WebShop[]> {
        return this.httpClient.get('/api/shops');
    };

    saveShop(shop: Api.WebShop): Promise<Api.IPostResponse<Api.WebShop>> {
        return this.httpClient.post('/api/shops', shop);
    };
}