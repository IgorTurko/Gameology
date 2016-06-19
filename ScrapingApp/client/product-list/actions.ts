/// <reference path="../typings/index.d.ts" />

import * as redux from "redux";

export const PRODUCT_SEARCH = "product-list-search";
export interface ProductListSearchAction extends redux.IAction {
    filter: string;
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