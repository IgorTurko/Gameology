///<reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link} from "react-router";

import { LoginForm, LoginFormProps, LoginFormHandlers } from "./login-form";

export interface HeaderProps extends LoginFormProps {
    isLoggedIn: boolean;
}


export function Header(props: { children: any } & HeaderProps & LoginFormHandlers) {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">
                        Gameology
                    </Link>
                </div>
                { props.children }
                <div className="navbar-right">
                    {
                        props.isLoggedIn
                            ? (<div className="navbar-text">You are logged in</div>)
                            : (<LoginForm errorMessage={ props.errorMessage }
                                onLogin={ c => props.onLogin(c) } />)
                    }
                </div>
            </div>
        </nav>
    );
} 