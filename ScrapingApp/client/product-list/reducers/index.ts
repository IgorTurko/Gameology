/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import productListLoaded from "./product-list-loaded";
import searchProductList from "./search-product-list";
import loadProductListRequest from "./load-product-list-request";
import productRefereshedFromServer from "./product-refreshed-from-server";
import priceSave from "./product-save-price";
import priceSaveSuccess from "./product-save-price-success";
import priceSaveError from "./product-save-price-error";

import * as Actions from "../actions";

const productInitialState: AppState.Products = {
    isLoading: false,
    products: [],
    shops: [],
    filteredProducts: [],
    search: "",
    updatedProductId: null,
    errors: {}
};

const actionMap = {
    [Actions.PRODUCT_SEARCH]: searchProductList,
    [Actions.PRODUCTS_LOADED]: productListLoaded,
    [Actions.PRODUCT_LOAD_REQUEST]: loadProductListRequest,
    [Actions.PRODUCT_DATA_RECEIVED_FROM_SERVER]: productRefereshedFromServer,
    [Actions.PRODUCT_SAVE_PRICE]: priceSave,
    [Actions.PRODUCT_SAVE_PRICE_SUCCESS]: priceSaveSuccess,
    [Actions.PRODUCT_SAVE_PRICE_ERROR]: priceSaveError,
};

export default function reduce(state: AppState.Products = productInitialState, action: redux.IAction): AppState.Products {
    const reducer = actionMap[action.type];
    if (!reducer)
        return state;

    return reducer(state, action);
} 