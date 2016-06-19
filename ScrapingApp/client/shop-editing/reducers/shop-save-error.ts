/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function shopSaveError(state: AppState.ShopEditing, action: Actions.ShopSaveErrorAction): AppState.ShopEditing {
    const shopState = Object.assign({}, state[action.shopId], { errorMessage: action.error });
    return Object.assign(
        {},
        state,
        {
            [action.shopId]: shopState
        });
}