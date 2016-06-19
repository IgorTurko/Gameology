/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function productRefreshedFromServer(state: AppState.Products, action: Actions.ProductDataReceivedFromServerAction): AppState.Products {


    const updateProducts = (products: Api.Product[]) => {
        if (!products.some(p => p.id === action.product.id)) {
            return [action.product, ...products];
        }
        else {
            return products.map(p => p.id === action.product.id ? action.product : p);
        }
    };

    const newState = Object.assign(
        {},
        state,
        {
            updatedProductId: action.product.id,
            products: updateProducts(state.products),
            filteredProducts: updateProducts(state.filteredProducts)
        });

    return newState;
}