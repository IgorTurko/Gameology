/// <reference path="./../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

interface SearchBoxProps extends React.Props<any> {
    value: string;
    placeholder: string;
}

export default class SearchBox extends React.Component<SearchBoxProps, {}> {
    handlerTextChange() {
      console.log('as');  
    };

    render() {
        return (
            <div className= "input-group">
                <input
                    type="text"
                    value={this.props.value}
                    className="form-control"
                    placeholder={this.props.placeholder}
                    onChange={this.handlerTextChange}/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Search</button>
                </span>
            </div>);
    }
}