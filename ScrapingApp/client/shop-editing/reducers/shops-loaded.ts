/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function shopsLoaded(state: AppState.ShopEditing, action: Actions.ShopLoadedAction): AppState.ShopEditing {
    return action.shops.toHash(
        s => s.id,
        s => ({
            deliveryPrice: s.deliveryPrice,
            errorMessage: null
        }));
}