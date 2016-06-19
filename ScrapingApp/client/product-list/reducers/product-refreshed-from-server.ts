/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function productRefreshedFromServer(state: AppState.Products, action: Actions.ProductDataReceivedFromServerAction): AppState.Products {
    const refreshProduct = (p: Api.Product) => p.id === action.product.id ? action.product : p;

    const newState = Object.assign(
        {},
        state,
        {
            updatedProductId: action.product.id,
            products: state.products.map(refreshProduct),
            filteredProducts: state.filteredProducts.map(refreshProduct)
        });

    return newState;
}