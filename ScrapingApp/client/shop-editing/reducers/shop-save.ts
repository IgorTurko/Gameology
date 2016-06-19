/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function shopSave(state: AppState.ShopEditing, action: Actions.ShopSaveAction): AppState.ShopEditing {
    const shopState = Object.assign({}, state[action.shop.id], { deliveryPrice: action.shop.deliveryPrice });

    return Object.assign(
        {},
        state,
        {
            [action.shop.id]: shopState
        });
}