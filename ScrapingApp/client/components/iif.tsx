/// <reference path="../typings/index.d.ts" />

import * as React from "react";

export type Predicate = () => boolean;

export interface IIfProps {
    condition: Predicate;
}

export class IIf extends React.Component<IIfProps, {}> {

    render() {
        if (this.props.condition && this.props.condition()) {
            return (
                <div>
                    { this.props.children }
                </div>
            );
        }
        else {
            return null;
        }
    }
}