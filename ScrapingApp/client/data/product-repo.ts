/// <reference path="../typings/index.d.ts"/>
import Product = Api.Product;

export default class ProductRepository {
    getAllProducts(): Promise<Product[]> {
        return fetch('/api/products')
            .then(response => response.json())
            .then(json => json as Product[], err => console.log('error'));
    };
}