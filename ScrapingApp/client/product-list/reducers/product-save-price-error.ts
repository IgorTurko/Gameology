/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function priceSaveError(state: AppState.Products, action: Actions.ProductSavePriceErrorAction): AppState.Products {
    return Object.assign(
        {},
        state,
        {
            errors: action.errors
        });
}