///<reference path="../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

interface LoginFormProps extends React.Props<any> {
    errorMessage: string;
    onLogin: (credentials: Api.AuthenticationCredentials) => void;
}

export default class LoginForm extends React.Component<LoginFormProps, {}>
{
    onFormSubmit(e: React.FormEvent) {
        e.preventDefault();

        const credentials: Api.AuthenticationCredentials = {
            login: e.target["login"].value,
            password: e.target["password"].value
        }

        if (this.props.onLogin) {
            this.props.onLogin(credentials);
        }
    }

    render() {
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
                        if (this.props.errorMessage)
                            return <div className="alert alert-danger" role="alert">{this.props.errorMessage}</div>;
                    })()
                }
            </div>);
    }
}