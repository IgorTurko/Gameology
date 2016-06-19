/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function shopSaveSuccess(state: AppState.ShopEditing, action: Actions.ShopSaveSuccessAction): AppState.ShopEditing {
    return Object.assign(
        {},
        state,
        {
            [action.shopId]: Object.assign(
                {},
                state[action.shopId],
                {
                    errorMessage: null
                })
        });
} 