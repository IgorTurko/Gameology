/// <reference path="../../typings/index.d.ts" />
import * as redux from "redux";

import * as Actions from "../actions";
import loginRequired from "./login-required";
import loginOnServer from "./login-on-server";
import loginError from "./login-error";
import loginSuccess from "./login-success";

const loginInitialState: AppState.Login = {
    isLoginRequired: false,
    isLogging: false,
    error: ""
};

const actionMap = {
    [Actions.LOGIN_REQUIRED]: loginRequired,
    [Actions.LOGIN_ON_SERVER]: loginOnServer,    
    [Actions.LOGIN_ERROR]: loginError,
    [Actions.LOGIN_SUCCESS]: loginSuccess
};

export default function reduce(state: AppState.Login = loginInitialState, action: redux.IAction): AppState.Login {
    const reducer = actionMap[action.type];
    if (!reducer)
        return state; 

    return reducer(state, action); 
}