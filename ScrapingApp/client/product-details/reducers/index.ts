///<reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";
import saveProduct from "./save-product";
import productDetailsLoaded from "./product-details-loaded";
import selectProduct from "./select-product";

const productInitialState: AppState.CurrentProduct = {
    product: null,
    shops: []
};

const actionMap = {
    [Actions.SAVE_PRODUCT]: saveProduct,
    [Actions.PRODUCT_LOADED]: productDetailsLoaded,
    [Actions.SELECT_PRODUCT]: selectProduct
};

export default function reduce(state: AppState.CurrentProduct = productInitialState, action: redux.IAction): AppState.CurrentProduct {
    const reducer = actionMap[action.type];
    if (!reducer)
        return state;

    return reducer(state, action);
}