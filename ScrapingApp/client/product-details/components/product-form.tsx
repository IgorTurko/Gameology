/// <reference path="../../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import Product = Api.Product;
import Shop = Api.WebShop;

export interface ProductFormProps {
    product: Product;
    shops: Shop[];
}

export interface ProductFormHandlers {
    onSaveProduct: (Product) => void;
}

export class ProductForm extends React.Component<ProductFormProps & ProductFormHandlers, {}> {

    constructor() {
        super();
        this.state = {
            title: ''
        };
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    onFormSubmit(e: React.FormEvent) {
        e.preventDefault();

        const product: Product = {
            title: e.target["title"].value as string,
            id: e.target["id"].value as string,
            scrapingUrls: this.props.shops.toHash((shop) => shop.id, (shop) => e.target[shop.id].value)
        }

        if (this.props.onSaveProduct) {
            this.props.onSaveProduct(product);
        }
    }

    render() {
        return (
            <form onSubmit={e => this.onFormSubmit(e) } className="form-horizontal product-form">
                <div className="form-group">
                    <label for="title" className="col-md-2 control-label">Product</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="title" name="title" value={this.props.product.title} placeholder="Product" onChange={this.handleTitleChange} />
                    </div>
                </div>
                {
                    this.props.shops.map(shop => (
                        <div className="form-group" key={shop.id}>
                            <label for={shop.id} className="col-md-2 control-label">Url for {shop.title}</label>
                            <div className="col-md-10">
                                <input type="text" className="form-control" value={this.props.product.scrapingUrls[shop.id]} id={shop.id} name={shop.id} onChange={this.handleTitleChange} />
                            </div>
                        </div>
                    ))
                }
                <input type="hidden" name="id" value={this.props.product.id} />
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default">Save</button>
                    </div>
                </div>
            </form>);
    }
}