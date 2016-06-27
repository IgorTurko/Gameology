/// <reference path="../typings/index.d.ts" />

import * as redux from "redux";

export const SAVE_PRODUCT = "save-product";
export interface SaveProductAction extends redux.IAction {
    product: Api.Product;
}

export function saveProduct(product: Api.Product): redux.IAction {
    if (!product)
        throw new Error("Product is required.");

    const result: SaveProductAction = {
        type: SAVE_PRODUCT,
        product: product
    };

    return result;
}

export const PRODUCT_LOAD_REQUEST = "load-product";
export interface LoadProductDetailsRequestAction extends redux.IAction {
    productId: string;
}

export const SAVE_ERROR = "save-error";
export interface SaveProductErrorAction extends redux.IAction {
    errors: {
        [path: string]: string[];
    }
}

export const SAVE_SUCCESS = "save-success";
export interface SaveProductSuccessAction extends redux.IAction {
}

export const PRODUCT_LOADED = "product-details-loaded";
export interface ProductDetailsLoadedAction extends redux.IAction {
    product: Api.Product;
    shops: Api.WebShop[];
}

export const PRODUCT_DELETE_REQUEST = "delete-product";
export interface ProductDeleteRequestAction extends redux.IAction {
    productId: string;
}

export function productDeleteRequest(productId: string): redux.IAction {
    if (!productId)
        throw new Error("Product ID is not defined.");

    const action: ProductDeleteRequestAction = {
        type: PRODUCT_DELETE_REQUEST,
        productId: productId
    };

    return action;
}

export const PRODUCT_DELETED = "product-deleted";
export interface ProductDeletedAction extends redux.IAction {
    productId: string;
}

export function productDeleted(productId: string): redux.IAction {
    if (!productId)
        throw new Error("Product ID is not defined.");

    const action: ProductDeletedAction = {
        type: PRODUCT_DELETED,
        productId: productId
    };

    return action;
}