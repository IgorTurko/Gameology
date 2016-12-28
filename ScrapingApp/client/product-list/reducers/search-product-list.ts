/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function searchProductList(state: AppState.Products, action: Actions.ProductListSearchAction): AppState.Products {
    return Object.assign({}, state, {
        search: action.filter,
        filteredProducts: state.products
            .filter(p => p.title && (!action.filter || p.title.toLowerCase().indexOf(action.filter.toLowerCase()) !== -1))
    });
}
