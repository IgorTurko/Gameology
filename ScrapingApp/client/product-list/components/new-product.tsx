/// <reference path="./../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link} from "react-router";

import { classNames } from "../../utils";

export default function NewProduct(props: { className?: string }) {
    return (
        <Link to="/product/new" className={ classNames("btn btn-default", props.className) }>New Product &gt; </Link>
    );
}