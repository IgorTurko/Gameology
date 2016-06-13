/// <reference path="../typings/index.d.ts" />

import * as redux from "redux";

export const LOGIN_REQUIRED = "login-required";

export interface LoginRequiredAction extends redux.IAction {

}

export const LOGIN_ON_SERVER = "login-on-server";

export interface LoginOnServerAction extends redux.IAction {
    credentials: Api.AuthenticationCredentials;
}


export const LOGIN_ERROR = "login-error";

export interface LoginErrorAction extends redux.IAction {
    errorMessage: string;
}

export const LOGIN_SUCCESS = "login-success";

export interface LoginSuccessAction extends redux.IAction {    
}