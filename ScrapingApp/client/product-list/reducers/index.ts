/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import productListLoaded from "./product-list-loaded";
import searchProductList from "./search-product-list";
import loadProductListRequest from "./load-product-list-request";
import productRefereshedFromServer from "./product-refreshed-from-server";

import * as Actions from "../actions";

const productInitialState: AppState.Products = {
    isLoading: false,
    products: [],
    shops: [],
    filteredProducts: [],
    search: "",
    updatedProductId: null
};

const actionMap = {
    [Actions.PRODUCT_SEARCH]: searchProductList,
    [Actions.PRODUCTS_LOADED]: productListLoaded,
    [Actions.PRODUCT_LOAD_REQUEST]: loadProductListRequest,
    [Actions.PRODUCT_DATA_RECEIVED_FROM_SERVER]: productRefereshedFromServer
};

export default function reduce(state: AppState.Products = productInitialState, action: redux.IAction): AppState.Products {
    const reducer = actionMap[action.type];
    if (!reducer)
        return state;

    return reducer(state, action);
} 