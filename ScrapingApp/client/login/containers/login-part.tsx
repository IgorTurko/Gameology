/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";

import * as Actions from "../actions";

import { LoginFormHandlers } from "../components/login-form";
import { Header, HeaderProps } from "../components/header";
import SearchBox from "../../product-list/containers/search-product-part";
import NewProduct from "../../product-list/components/new-product";

function loginPart(props: React.Props<any> & HeaderProps & LoginFormHandlers) {
    return (
        <div>
            <Header {...props}>
                <SearchBox className="navbar-form navbar-left" />
                {
                    (() => {
                        if (props.isLoggedIn) {
                            return (<NewProduct className="navbar-btn" />);
                        }
                    })()
                }
            </Header>
            <div className="container">
                {props.children}
            </div>
        </div>);
}

export default connect(
    (state: AppState.App): HeaderProps => ({
        isLoggedIn: !state.login.isLoginRequired,
        errorMessage: state.login.error
    }),

    (dispatch: redux.IDispatch): LoginFormHandlers => ({
        onLogin(credentials: Api.AuthenticationCredentials) {
            const action: Actions.LoginOnServerAction = {
                type: Actions.LOGIN_ON_SERVER,
                credentials: credentials
            };

            dispatch(action);
        }
    })

)(loginPart);