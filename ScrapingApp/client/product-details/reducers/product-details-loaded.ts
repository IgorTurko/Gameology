/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function productDetailsLoaded(state: AppState.CurrentProduct, action: Actions.ProductDetailsLoadedAction): AppState.CurrentProduct {
    return Object.assign({}, state, {
        product: action.product,
        shops: action.shops
    });
}