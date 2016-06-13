/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function productListLoadRequest(state: AppState.Products, action: Actions.LoadProductListRequestAction): AppState.Products {
    return Object.assign({}, state, {
        isLoading: true
    });
}
