/// <reference path="../typings/index.d.ts" />

import * as redux from "redux";

export const SAVE_PRODUCT = "save-product";
export interface SaveProductAction extends redux.IAction {
    product: Api.Product;
}

export const PRODUCT_LOAD_REQUEST = "load-product";
export interface LoadProductDetailsRequestAction extends redux.IAction {
    productId: string;
}

export const SAVE_ERROR = "save-error";
export interface SaveProductErrorAction extends redux.IAction {
    error: Api.IFailResponse;
}

export const SAVE_SUCCESS = "save-success";
export interface SaveProductSuccessAction extends redux.IAction {
}

export const PRODUCT_LOADED = "product-details-loaded";
export interface ProductDetailsLoadedAction extends redux.IAction {
    product: Api.Product;
    shops: Api.WebShop[];
}