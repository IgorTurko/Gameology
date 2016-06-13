/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

import * as Actions from "../actions";

import { LoginFormHandlers } from "../components/login-form";
import { Header, HeaderProps } from "../components/header";

const LoginPart = connect(
    (state: AppState.App): HeaderProps => ({
        isLoggedIn: !state.login.isLoginRequired,
        errorMessage: state.login.error
    }),

    (dispatch: redux.IDispatch): LoginFormHandlers => ({
        onLogin(credentials: Api.AuthenticationCredentials){
            const action: Actions.LoginOnServerAction = {
                type: Actions.LOGIN_ON_SERVER,
                credentials: credentials
            };

            dispatch(action);
        }
    })

)(Header);

export default LoginPart;