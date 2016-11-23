/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function priceSaveSuccess(state: AppState.Products, action: Actions.ProductSavePriceSuccessAction): AppState.Products {
    return Object.assign(
        {},
        state,
        {
            errors: { }
        });
} 