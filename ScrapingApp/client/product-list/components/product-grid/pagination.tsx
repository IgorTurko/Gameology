/// <reference path="./../../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    className?: string;
}

export interface PaginationHandlers {
    onPageChange: (page: number) => void;
}

export class Pagination extends React.Component<PaginationProps & PaginationHandlers, {}> {
    getPages(): number[] {
        const res = [];
        for (let i = 1; i <= this.props.totalPages; i++) {
            res.push(i)
        }
        return res;
    }

    render() {
        return (
            <ul className="pagination">
                {this.getPages().map(page => (
                    <li key={page}
                        className={page === this.props.currentPage ? "active" : ""}
                        style={{ cursor: "pointer" }}
                        onClick={() => this.props.currentPage !== page && this.props.onPageChange(page)}>
                        <a>{page}</a>
                    </li>
                ))}
            </ul>
        );
    }
}