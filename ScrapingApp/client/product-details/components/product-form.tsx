/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Link} from "react-router";

export interface ProductFormProps {
    product: Api.Product;
    shops: Api.WebShop[];
}

export interface ProductFormHandlers {
    onSaveProduct: (product: Api.Product) => void;
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
        this.setState(s => {
            s.title = e.target.value
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

    render() {
        return (
            <form onSubmit={e => this.onFormSubmit(e) } className="form-horizontal product-form">
                <div className="form-group">
                    <label for="title" className="col-md-2 control-label">Product</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="title" name="title" value={this.state.title} placeholder="Product" onChange={e => this.handleTitleChange(e)} />
                    </div>
                </div>
                {
                    this.props.shops.map(shop => (
                        <div className="form-group" key={shop.id}>
                            <label for={shop.id} className="col-md-2 control-label">Url for {shop.title}</label>
                            <div className="col-md-10">
                                <input type="text" className="form-control" value={this.state.scrapingUrls[shop.id]} id={shop.id} name={shop.id} onChange={e => this.handleUrlChange(e)} />
                            </div>
                        </div>
                    ))
                }
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <Link to="/" className="btn btn-default">&lt; Back</Link>&nbsp;
                        <button type="submit" className="btn btn-default">Save</button>
                    </div>
                </div>
            </form>);
    }
}