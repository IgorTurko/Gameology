/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { classNames, getScrollbarWidth } from "../../utils";

export interface HeaderProps {
    children?: any;
}

export function Header(props: HeaderProps): JSX.Element {
    return (
        <div>
            { props.children }
        </div>
    );
}
