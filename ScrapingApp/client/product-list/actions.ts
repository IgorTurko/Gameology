/// <reference path="../typings/index.d.ts" />

import * as redux from "redux";

export class ProductListSearchAction implements redux.IAction {
    static ID = "product-list-search"

    type = ProductListSearchAction.ID;

    constructor(public filter: string) { }
}

export class ProductListLoadedAction implements redux.IAction {
    static ID = "product-list-loaded";    

    type = ProductListLoadedAction.ID;

    constructor(public products: Api.Product[], public shops: Api.WebShop[]) {
        if (!products)
            throw new Error("product is undefined");
        if (!shops)
            throw new Error("shops is undefined");
    }
}

export class LoadProductListRequestAction implements redux.IAction {
    static ID = "load-product-list-request";

    type = LoadProductListRequestAction.ID;    
}