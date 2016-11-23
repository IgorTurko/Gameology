/// <reference path="../typings/index.d.ts"/>

import Product = Api.Product;
import HttpClient from './http-client';

export default class ProductRepository {
    private httpClient = new HttpClient();

    getAllProducts(): Promise<Product[]> {
        return this.httpClient.get<Product[]>('/api/products');
    };

    getProductById(id): Promise<Product> {
        return this.httpClient.get<Product>(`/api/products/${id}`);
    };

    saveProduct(product: Product): Promise<Api.IPostResponse<Product>> {
        return this.httpClient.post("/api/products", product);
    };

    saveProductPrice(productId: string, shopId: string, price: string): Promise<Api.IPostResponse<Product>> {
        return this.httpClient.post("/api/products/price", { productId: productId, shopId: shopId, price: price });
    };

    deleteProduct(id: string): Promise<any> {
        return this.httpClient.delete(`/api/products/${id}`);
    }
}