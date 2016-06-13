/// <reference path="../../typings/index.d.ts" />
import * as redux from "redux";

import LoginRepository from "../../data/login-repo";
import MiddlewareBase from "../../middleware-base";
import * as Actions from "../actions";


export default class LoginMiddleware extends MiddlewareBase<AppState.App> {
    private loginRepo = new LoginRepository();

    [Actions.LOGIN_ON_SERVER](state: AppState.App, action: Actions.LoginOnServerAction, dispatch: redux.IDispatch) {
        
    }
}