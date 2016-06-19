/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function shopSaveError(
    state: AppState.Products,
    action: Actions.ShopSaveErrorAction): AppState.Products {

    return Object.assign(
        {},
        state,
        {
            shopSavingErrors: Object.assign(
                {},
                state.shopSavingErrors,
                {
                    [action.shopId]: action.error
                })
        });
} 