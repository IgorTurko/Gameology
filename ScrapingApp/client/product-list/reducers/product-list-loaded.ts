/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

import searchProductList from "./search-product-list";

export default function productListLoaded(state: AppState.Products, action: Actions.ProductListLoadedAction): AppState.Products {
    const newState = Object.assign({}, state, {
        isLoading: false,
        products: action.products,
        shops: action.shops
    });

    return searchProductList(newState, Actions.searchProducts(state.search));
}