/// <reference path="../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "./actions";

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
        shops: action.shops
    });
}

const actionMap = {
    [Actions.ProductListSearchAction.ID]: searchProductList,
    [Actions.ProductListLoadedAction.ID]: productListLoaded
};

export function reduce(state: AppState.Products, action: redux.IAction): AppState.Products {
    const reducer = actionMap[action.type];
    if (!reducer)
        return state;

    return reducer(state, action);
}
