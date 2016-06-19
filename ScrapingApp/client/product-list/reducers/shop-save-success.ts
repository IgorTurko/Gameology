/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function shopSaveSuccess(state: AppState.Products, action: Actions.ShopSaveSuccessAction): AppState.Products {
    return Object.assign(
        {},
        state,
        {
            shopSavingErrors: Object.assign(
                {},
                state.shopSavingErrors,
                {
                    [action.shopId]: null
                })
        });
} 