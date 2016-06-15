/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import productListLoaded from "./product-list-loaded";
import searchProductList from "./search-product-list";
import loadProductListRequest from "./load-product-list-request"; 

import * as Actions from "../actions";

const productInitialState: AppState.Products = {
    isLoading: false,
    products:[],
    shops: [],
    filteredProducts: [],
    search: "",
    currentProduct: null
};

const actionMap = {
    [Actions.PRODUCT_SEARCH]: searchProductList,
    [Actions.PRODUCTS_LOADED]: productListLoaded,
    [Actions.PRODUCT_LOAD_REQUEST]: loadProductListRequest
};

export default function reduce(state: AppState.Products = productInitialState, action: redux.IAction): AppState.Products {
    const reducer = actionMap[action.type];
    if (!reducer)
        return state; 

    return reducer(state, action);
} 