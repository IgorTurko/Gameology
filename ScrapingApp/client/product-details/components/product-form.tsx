/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link} from "react-router";

import { classNames } from "../../utils";
import {ProductInputField} from "./product-input-field";


export interface ProductFormProps {
    product: Api.Product;
    shops: Api.WebShop[];
    errors: {
        [path: string]: string[];
    },
    saved: boolean
}

export interface ProductFormHandlers {
    onSaveProduct: (product: Api.Product) => void;
    onDeleteProduct: (productId: string) => void;
}

export class ProductForm extends React.Component<ProductFormProps & ProductFormHandlers, Api.Product> {

    constructor(props: ProductFormProps & ProductFormHandlers) {
        super(props);

        this.state = {
            id: '',
            title: '',
            scrapingUrls: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.product);
    }

    handleTitleChange(e) {
        let value = e.target.value;
        this.setState(s => {
            s.title = value;
            return s;
        });
    }

    handleUrlChange(e) {
        let scrapingUrls = this.state.scrapingUrls;
        scrapingUrls[e.target.name] = e.target.value;
        this.setState(s => {
            s.scrapingUrls = scrapingUrls;
            return s;
        });
    }

    onFormSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (this.props.onSaveProduct) {
            this.props.onSaveProduct(this.state);
        }
    }

    onDeleteProduct() {
        if (!this.props.product || !this.props.product.id || !this.props.onDeleteProduct) {
            return;
        }

        if (confirm("Are you sure you want to delete product?")) {
            this.props.onDeleteProduct(this.props.product.id);
        }
    }

    render() {
        return (
            <form onSubmit={e => this.onFormSubmit(e) } className="form-horizontal product-form">
                {(() => {
                    if (this.props.saved) {
                        return (<div className="alert alert-success" role="alert">Product saved</div>);
                    }
                })() }

                {(() => {
                    const commonErrors = this.props.errors[""] || [];
                    const scrappingUrlsErrors = this.props.errors["scrapingUrls"] || [];
                    const errors = commonErrors.concat(scrappingUrlsErrors);

                    if (errors.length > 0) {
                        return (errors.map((error, index) => (
                            <div key="{index}" className="alert alert-danger" role= "alert">{error}</div>)
                        ));
                    }
                })() }

                <ProductInputField label="Product" id="title" errors={this.props.errors["title"]}>
                    <input type="text" className="form-control" id="title" name="title" value={this.state.title} placeholder="Product" onChange={e => this.handleTitleChange(e) } />
                </ProductInputField>
                {
                    this.props.shops.map(shop => (
                        <ProductInputField key={shop.id} label={`Url for ${shop.title}`} id={shop.id} errors={this.props.errors[`scrapingUrls.${shop.id}`]}>
                            <input type="text" className="form-control" value={this.state.scrapingUrls[shop.id] || ''} id={shop.id} name={shop.id} onChange={e => this.handleUrlChange(e) } />
                        </ProductInputField>
                    ))
                }
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <Link to="/" className="btn btn-default">&lt; Back</Link>&nbsp;
                        <button type="submit" className="btn btn-default">Save</button>
                        <button type="button" className={  classNames("btn btn-danger", { "hidden": !this.props.product.id }) } onClick={ () => this.onDeleteProduct() }>Delete</button>
                    </div>
                </div>
            </form>);
    }
}