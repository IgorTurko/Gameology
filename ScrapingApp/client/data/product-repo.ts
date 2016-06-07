/// <reference path="../typings/index.d.ts"/>
import Product = Api.Product;
import HttpClient from './http-client'; 

export default class ProductRepository {
    private httpClient = new HttpClient();

    getAllProducts(): Promise<Product[]> {
        return this.httpClient.get<Product[]>('/api/products');
    };
}