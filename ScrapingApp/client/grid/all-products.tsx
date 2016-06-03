/// <reference path="./../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

interface GridProps extends React.Props<any> {
    value: string;
}

export default class Grid extends React.Component<GridProps, {}> {
    render() {
        return (<div className="row"></div>);
    }
}