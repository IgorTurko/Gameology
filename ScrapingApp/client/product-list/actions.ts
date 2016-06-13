/// <reference path="../typings/index.d.ts" />

import * as redux from "redux";

export const SEARCH = "product-list-search";

export interface ProductListSearchAction extends redux.IAction {
    filter: string;
}

export const PRODUCTS_LOADED = "product-list-loaded";

export interface ProductListLoadedAction extends redux.IAction {
    products: Api.Product[];
    shops: Api.WebShop[];
}

export const LOAD_REQUEST = "load-product-list-request";

export interface LoadProductListRequestAction extends redux.IAction {        
}