/// <reference path="../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "./actions";

const productInitialState: AppState.Products = {
    isLoading: false,
    products:[],
    shops: [],
    filteredProducts: [],
    search: ""
};

export function searchProductList(state: AppState.Products, action: Actions.ProductListSearchAction): AppState.Products {
    return Object.assign({}, state, {
        filteredProducts: state.products
            .filter(p => !action.filter || p.title.toLowerCase().indexOf(action.filter.toLowerCase()) !== -1)
    });
}

export function productListLoaded(state: AppState.Products, action: Actions.ProductListLoadedAction): AppState.Products {
    return Object.assign({}, state, {
        isLoading: false,
        products: action.products,
        search: "",
        filteredProducts: action.products,
        shops: action.shops
    });
}

const actionMap = {
    [Actions.SEARCH]: searchProductList,
    [Actions.PRODUCTS_LOADED]: productListLoaded 
};

export function reduce(state: AppState.Products = productInitialState, action: redux.IAction): AppState.Products {
    const reducer = actionMap[action.type];
    if (!reducer)
        return state;

    return reducer(state, action);
}
