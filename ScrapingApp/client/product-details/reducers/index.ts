///<reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";
import saveProduct from "./save-product";
import productDetailsLoaded from "./product-details-loaded";
import loadProductDetails from "./load-product-details-request";
import saveProductError from "./save-product-error"
import saveProductSuccess from "./save-product-success"

const productInitialState: AppState.CurrentProduct = {
    product: {
        id: '',
        title: '',
        scrapingUrls: {}
    },
    shops: [],
    errors: {
        title: [],
        scrapingUrls: []
    }
};

const actionMap = {
    [Actions.SAVE_PRODUCT]: saveProduct,
    [Actions.PRODUCT_LOADED]: productDetailsLoaded,
    [Actions.PRODUCT_LOAD_REQUEST]: loadProductDetails,
    [Actions.SAVE_ERROR]: saveProductError,
    [Actions.SAVE_SUCCESS]: saveProductSuccess,
};

export default function reduce(state: AppState.CurrentProduct = productInitialState, action: redux.IAction): AppState.CurrentProduct {
    const reducer = actionMap[action.type];
    if (!reducer)
        return state;

    return reducer(state, action);
}