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

export const SHOP_SAVE = "shop-save";
export interface ShopSaveAction extends redux.IAction {
    shop: Api.WebShop
}

export function shopSave(shop: Api.WebShop): ShopSaveAction {
    if (!shop) {
        throw new Error("shop is required");
    }

    return {
        type: SHOP_SAVE,
        shop: shop
    };
}

export const SHOP_SAVE_SUCCESS = "shop-save-success";
export interface ShopSaveSuccessAction extends redux.IAction {
    shopId: string;
}

export function shopSaveSuccess(shopId: string): ShopSaveSuccessAction {
    if (!shopId) {
        throw new Error("ShopId is required.");
    }
    return {
        type: SHOP_SAVE_SUCCESS,
        shopId: shopId
    };
}

export const SHOP_SAVE_ERROR = "shop-save-error";
export interface ShopSaveErrorAction extends redux.IAction {
    shopId: string;
    error: string;
}

export function shopSaveError(shopId: string, error: string): ShopSaveErrorAction {
    if (!shopId) {
        throw new Error("ShopId is required.");
    }
    return {
        type: SHOP_SAVE_ERROR,
        shopId: shopId,
        error: error
    };
}