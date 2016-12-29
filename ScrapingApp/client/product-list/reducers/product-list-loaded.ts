/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function productListLoaded(state: AppState.Products, action: Actions.ProductListLoadedAction): AppState.Products {
    return Object.assign({}, state, {
        isLoading: false,
        products: action.products,
        shops: action.shops,
        totalPages: action.totalPages,
        page: action.currentPage
    });
}