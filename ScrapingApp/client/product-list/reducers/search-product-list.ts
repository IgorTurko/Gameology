/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function searchProductList(state: AppState.Products, action: Actions.ProductListSearchAction): AppState.Products {
    return Object.assign({}, state, {
        filteredProducts: state.products
            .filter(p => !action.filter || p.title.toLowerCase().indexOf(action.filter.toLowerCase()) !== -1)
    });
}
