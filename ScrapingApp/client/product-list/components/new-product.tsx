/// <reference path="./../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link} from "react-router";

export default class NewProduct extends React.Component<{}, {}> {

    render() {
        return (
                <div className="row add-product">
                    <Link to="/product/new" className="btn btn-default">New Product &gt;</Link>
                </div>);
    }
}