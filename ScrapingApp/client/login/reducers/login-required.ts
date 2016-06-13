/// <reference path="../../typings/index.d.ts" />
import * as redux from "redux";

import * as Actions from "../actions";

export default function loginRequired(state: AppState.Login, action: Actions.LoginRequiredAction): AppState.Login {
    return Object.assign({}, state, {
        isLogging: false,
        isLoginRequired: true,
        credentials: {},
        error: ""
    });
}