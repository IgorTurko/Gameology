/// <reference path="../../typings/index.d.ts" />
import * as redux from "redux";

import * as Actions from "../actions";

export default function loginSuccess(state: AppState.Login, action: Actions.LoginSuccessAction): AppState.Login {
    return Object.assign({}, state, {
        isLogging: false,
        isLoginRequired: false,
        credentials: null,
        error: null
    });
}