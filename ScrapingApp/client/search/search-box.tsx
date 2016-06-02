/// <reference path="./../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

interface SearchBoxProps extends React.Props<any> {
    value: string;
    placeholder: string;
}

export default class SearchBox extends React.Component<SearchBoxProps, {}> {
    render() {
        return <div>Hello {this.props.value }</div>;
    }
}