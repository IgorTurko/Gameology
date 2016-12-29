/// <reference path="../typings/index.d.ts"/>

import Product = Api.Product;
import HttpClient from './http-client';


export default class ProductRepository {
    private httpClient = new HttpClient();
    private perPage = 5;

    getAllProducts(search: string, page: number): Promise<Api.ProductPage> {
        return this.httpClient.get<Api.ProductPage>(`/api/products?search=${search}&page=${page}&perPage=${this.perPage}`);
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