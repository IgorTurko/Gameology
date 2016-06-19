///<reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function saveProductError(state: AppState.CurrentProduct, action: Actions.SaveProductErrorAction): AppState.CurrentProduct {
    return Object.assign({}, state, {
        errors: action.errors,
        saved: false
    });
}