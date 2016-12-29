/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function priceSave(state: AppState.Products, action: Actions.ProductSaveAction): AppState.Products {

    function map(p: Api.Product) {
        if (p.id == action.productId) {
            let values = Object.assign({}, p.values, { [action.shopId]:  Object.assign({}, p.values[action.shopId], { manualPrice: action.price }) });

            return Object.assign({}, p, { values });
        }

        return p;
    }

    return Object.assign(
        {},
        state,
        {
            products: state.products.map(map)
        });
}