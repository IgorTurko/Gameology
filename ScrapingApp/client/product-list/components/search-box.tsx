/// <reference path="./../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

import { classNames } from "../../utils";

export interface SearchBoxProps {
    placeholder: string;
    className?: string;
}

export interface SearchBoxHandlers {
    onFiltering: (filter: string) => void;
}

export class SearchBox extends React.Component<SearchBoxProps & SearchBoxHandlers, {}> {
    onFormSubmit(e: React.FormEvent) {
        e.preventDefault();

        var filter = e.target["filter"].value;

        if (this.props.onFiltering) {
            this.props.onFiltering(filter);
        }
    }

    render() {
        return (
            <form className={ this.props.className } onSubmit={e => this.onFormSubmit(e) }>
                <div className="form-group">
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
                </div>
            </form>);
    }
}