/// <reference path="../typings/index.d.ts"/>
import Product = Api.Product;

export default class ProductRepository {
    getAllProducts(): Promise<Product[]> {
        return fetch('/api/products')
            .then(function(response: Response) {
                return response.json();
            })
            .then(function(json) {
                return json as Product[];
            }, function(err) {
                console.log('error');
            });
    }
}