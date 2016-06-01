/// <reference path="../../typings/index.d.ts" />

import ProductValidator from "./product-validator";

export default class ProductService {
    private validator = new ProductValidator();

    constructor(private storage: Products.IProductStorage) {
        if (!storage)
            throw new Error("storage is undefined");
    }

    all(): Promise<Products.Product[]> {
        return this.storage
            .all();
    }

    save(product: Products.Product): Promise<Validator.ValidationResult> {
        if (!product)
            throw new Error("product is undefined");

        return this.validator
            .validate(product)
            .then(validationResult => {
                if (validationResult.isValid)
                    return validationResult;

                return this.storage
                    .save(product)
                    .then(() => validationResult);

            });
    }
}