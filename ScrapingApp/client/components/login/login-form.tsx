///<reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

import {eventBus, Events} from "../../event-bus";

import LoginRepository from "../../data/login-repo";

interface ILoginFormState {
    isAuthenticated: boolean;
    errorMessage: string;
}

export default class LoginForm extends React.Component<{}, ILoginFormState>
{
    private loginRepository = new LoginRepository();

    constructor() {
        super();

        this.state = {
            errorMessage: '',
            isAuthenticated: true
        };

        eventBus.addListener(Events.AuthorizationError, () => this.onLoginError());
    }

    onLoginError() {
        this.setState(state => {
            state.isAuthenticated = false;
            return state;
        });
    }

    onFormSubmit(e: React.FormEvent) {
        e.preventDefault();

        const credentials: Api.AuthenticationCredentials = {
            login: e.target["login"].value,
            password: e.target["password"].value
        }

        this.loginRepository.login(credentials)
            .then(() => {
                location.reload();
            })
            .catch(error => {
                this.setState(state => {
                    state.errorMessage = error;
                    return state;
                })
            })
    }

    render() {
        if (this.state.isAuthenticated) {
            return (<div>You are logged in</div>);
        }

        return (
            <div>
                <form className="form-inline" onSubmit={e=>this.onFormSubmit(e)}>
                    <div className="form-group">
                        <label className="sr-only" for="login">Login</label>
                        <input type="text" className="form-control" name="login" id="login" placeholder="Login" />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" for="password">Password</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-default">Log in</button>
                </form>
                {
                    (() => {
                        if (this.state.errorMessage)
                            return <div className="alert alert-danger" role="alert">{this.state.errorMessage}</div>;
                    })()
                }
            </div>);
    }
}