/// <reference path="../../typings/index.d.ts" />

import * as redux from "redux";

import * as Actions from "../actions";


export default function loginOnServer(state: AppState.Login, action: Actions.LoginOnServerAction): AppState.Login {
    return Object.assign({}, state, {
        isLogging: true
    });
}