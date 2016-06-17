/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link} from "react-router";

export interface ProductInputFieldProps {
    label: string;
    id: string;
    errors: string[];
}

export class ProductInputField extends React.Component<ProductInputFieldProps, {}> {
    render() {
        return (
            <div className="form-group">
                <label for={this.props.id} className="col-md-2 control-label">{this.props.label}</label>
                <div className={(this.props.errors || []).length > 0 ? "col-md-10 has-error" : "col-md-10"}>
                    {this.props.children}
                    {
                        (this.props.errors || []).map((error, index) => (
                            <span key={index} className="help-block">{error || ''}</span>    
                        ))
                    }
                </div>
            </div>);
    }
}