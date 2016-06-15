///<reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function saveProduct(state: AppState.CurrentProduct, action: Actions.SaveProductAction): AppState.CurrentProduct {
    return Object.assign({}, state, {
        product: action.product
    });
}