/// <reference path="../typings/index.d.ts"/>

interface ProductDetails {
    url: string;
    image: string;
}

interface Product {
    name: string;
    data: ProductDetails[];
}

export default class ProductRepository {
    getAllProducts(): Promise<Product[]> {
        return fetch('')
            .then(function(response: Response) {
                return response.json();
            })
            .then(function(json) {
                return JSON.parse(json) as Product[];
            }, function(err) {
                console.log('error');
            });
    }
}