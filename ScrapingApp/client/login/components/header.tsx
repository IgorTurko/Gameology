///<reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import LoginForm from "./login-form";

interface HeaderProps {
    credentials: Api.AuthenticationCredentials;
    credentialsErrorMessage: string;
    onLogin: (credentials: Api.AuthenticationCredentials) => void;
    isLoggedIn: boolean;
}


export default function Header(props: HeaderProps) {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-left">
                    <h3>Gameology</h3>
                </div>
                <div className="navbar-right">
                    {
                        props.isLoggedIn 
                        ? (<div className="navbar-text">You are logged in</div>)
                        : (<LoginForm crendentials={ props.credentials } 
                                    errorMessage={ props.credentialsErrorMessage } 
                                    onLogin={ c => props.onLogin(c) } />) 
                    }                    
                </div>
            </div>
        </nav>
    );
} 