/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import shopSave from "./shop-save";
import shopSaveError from "./shop-save-error";
import shopSaveSuccess from "./shop-save-success";
import shopLoaded from "./shops-loaded";

import * as Actions from "../actions";

const shopEditingInitialState: AppState.ShopEditing = {};

const actionMap = {
    [Actions.SHOP_SAVE]: shopSave,
    [Actions.SHOP_SAVE_ERROR]: shopSaveError,
    [Actions.SHOP_SAVE_SUCCESS]: shopSaveSuccess,
    [Actions.SHOPS_LOADED]: shopLoaded
};

export default function reduce(state: AppState.ShopEditing = shopEditingInitialState, action: redux.IAction): AppState.ShopEditing {
    const reducer = actionMap[action.type];
    if (!reducer)
        return state;

    return reducer(state, action);
} 