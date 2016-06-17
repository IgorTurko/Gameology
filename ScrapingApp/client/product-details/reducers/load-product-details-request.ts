/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function selectProduct(state: AppState.CurrentProduct, action: Actions.LoadProductDetailsRequestAction): AppState.CurrentProduct {
    return Object.assign({}, state, {
        product: state.product,
        saved: false
    });
}
