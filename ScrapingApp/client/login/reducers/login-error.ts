/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";


export default function loginError(state: AppState.Login, action: Actions.LoginErrorAction): AppState.Login {
    return Object.assign({}, state, {
        isLogging: false,
        error: action.errorMessage
    });
}