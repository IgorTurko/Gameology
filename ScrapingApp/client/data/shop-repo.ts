/// <reference path="../typings/index.d.ts"/>

export default class ShopRepository {
    getAllShops(): Promise<Product[]> {
        return fetch('/api/products')
            .then(function (response: Response) {
                return response.json();
            })
            .then(function (json) {
                return json as Product[];
            }, function (err) {
                console.log('error');
            });
    };
}