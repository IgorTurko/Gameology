/// <reference path="../typings/index.d.ts" />

import * as redux from "redux";

export const PRODUCT_SEARCH = "product-list-search";
export interface ProductListSearchAction extends redux.IAction {
    filter: string;
}

export function searchProducts(filter: string): ProductListSearchAction {
    return {
        type: PRODUCT_SEARCH,
        filter: filter
    };
}

export const PRODUCTS_LOADED = "product-list-loaded";
export interface ProductListLoadedAction extends redux.IAction {
    products: Api.Product[];
    shops: Api.WebShop[];
}

export const PRODUCT_LOAD_REQUEST = "load-product-list-request";
export interface LoadProductListRequestAction extends redux.IAction {
}

export function reloadProductList(): LoadProductListRequestAction {
    return {
        type: PRODUCT_LOAD_REQUEST
    };
}

export const PRODUCT_DATA_RECEIVED_FROM_SERVER = "product-data-received-from-server";
export interface ProductDataReceivedFromServerAction extends redux.IAction {
    product: Api.Product;
}

export function productDataReceivedFromServer(product: Api.Product): ProductDataReceivedFromServerAction {
    if (!product) {
        throw new Error("Product data required");
    }

    return {
        type: PRODUCT_DATA_RECEIVED_FROM_SERVER,
        product: product
    };
}

export const PRODUCT_SAVE_PRICE = "product-save-price";
export interface ProductSaveAction extends redux.IAction {
    productId: string,
    shopId: string,
    price: string
}
export function productSavePrice(productId: string, shopId: string, price: string): ProductSaveAction {
    if (!productId) {
        throw new Error("Product ID is required");
    }

    if (!shopId) {
        throw new Error("Shop ID is required");
    }

    return {
        type: PRODUCT_SAVE_PRICE,
        productId: productId,
        shopId: shopId,
        price: price
    };
}


export const PRODUCT_SAVE_PRICE_SUCCESS = "product-save-price-success";
export interface ProductSavePriceSuccessAction extends redux.IAction {
    productId: string;
    shopId: string;
    price: number;
}
export function productSavePriceSuccess(productId: string, shopId: string, price: number): ProductSavePriceSuccessAction {
    if (!productId) {
        throw new Error("ProductId is required.");
    }
    return {
        type: PRODUCT_SAVE_PRICE_SUCCESS,
        productId: productId,
        shopId: shopId,
        price: price
    };
}

export const PRODUCT_SAVE_PRICE_ERROR = "product-save-price-error";
export interface ProductSavePriceErrorAction extends redux.IAction {
    productId: string;
    errors: {
        [name: string]: string;
    };
}

export function productSavePriceError(productId: string, errors: any): ProductSavePriceErrorAction {
    if (!productId) {
        throw new Error("ProductId is required.");
    }
    return {
        type: PRODUCT_SAVE_PRICE_ERROR,
        productId: productId,
        errors: errors
    };
}