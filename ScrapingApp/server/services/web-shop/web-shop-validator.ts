/// <reference path="../../typings/index.d.ts" />

import { Validator } from "../../validation/validation";

export default class WebShopValidator {

    validate(webShop: Api.WebShop): Api.ValidationResult {
        if (!webShop)
            throw new Error("webShop is undefined");

        const validator = new Validator();

        return validator
            .property("title")
                .errorIf(() => !webShop.title, "Title is required")
                .errorIf(() => webShop.title && webShop.title.length > 1024, "Title too long")
            .end()
            .property("delivery")
                .array(webShop.delivery,
                (delivery, validator) => {
                    validator
                        .property("deliveryMethod")
                            .errorIf(() => !delivery.deliveryMethod, "Delivery method is required")
                            .errorIf(() => delivery.deliveryMethod && delivery.deliveryMethod.length > 1024, "Delivery method too long")
                        .end()
                        .property("price")
                            .errorIf(() => isNaN(delivery.price) || !delivery.price || delivery.price < 0, "Price is required and must be greater than zero")
                        .end();
                })
            .end()
            .result();
    }
}