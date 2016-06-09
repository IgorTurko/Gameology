/// <reference path="./../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

import {browserHistory} from "react-router";

import LoginForm from "../login/login-form";

export default class LayoutPage extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-left">
                            <h3>Gameology</h3>
                        </div>
                        <div className="navbar-right">
                            <LoginForm /> 
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>);
    }
}