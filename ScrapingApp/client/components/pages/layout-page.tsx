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
                <LoginForm />
                {this.props.children}
            </div>);
    }
}