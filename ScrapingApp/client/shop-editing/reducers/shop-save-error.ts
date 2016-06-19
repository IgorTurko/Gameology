/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function shopSaveError(state: AppState.ShopEditing, action: Actions.ShopSaveErrorAction): AppState.ShopEditing {
    return Object.assign(
        {},
        state,
        {
            [action.shopId]: Object.assign(
                {},
                state[action.shopId],
                {
                    errorMessage: action.error
                })
        });
}