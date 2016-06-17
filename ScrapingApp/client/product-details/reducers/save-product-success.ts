///<reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";

export default function saveProductSuccess(state: AppState.CurrentProduct, action: Actions.SaveProductSuccessAction): AppState.CurrentProduct {
    return Object.assign({}, state, {
        errors: {}
    });
}