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
            .property("deliveryPrice")
                .errorIf(() => 
                    webShop.deliveryPrice != null && 
                    webShop.deliveryPrice !== undefined &&                
                    (isNaN(webShop.deliveryPrice) ||
                        !webShop.deliveryPrice ||
                        webShop.deliveryPrice < 0), 
                    
                    "Delivery price is not valid")
            .end()
            .result();
    }
}