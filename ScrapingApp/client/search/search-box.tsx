/// <reference path="./../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

interface SearchBoxProps extends React.Props<any> {
    onFiltering: (filter:string) => void;
    placeholder: string;
}

export default class SearchBox extends React.Component<SearchBoxProps, {}> {
    onFormSubmit(e: React.FormEvent) {
        e.preventDefault();

        var filter = e.target["filter"].value;

        if (this.props.onFiltering) {
            this.props.onFiltering(filter);
        }
    }

    render() {
        return (
            <form onSubmit={e => this.onFormSubmit(e) }>
                <div className="search-box input-group">
                    <input
                        name="filter"
                        type="text"
                        className="form-control"
                        placeholder={this.props.placeholder} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Search</button>
                    </span>
                </div>
            </form>);
    }
}