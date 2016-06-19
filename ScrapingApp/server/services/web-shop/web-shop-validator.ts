/// <reference path="../../typings/index.d.ts" />

import { validateWithPromise as validate, ValidationRule, rules } from "../../validator";

export default class WebShopValidator {
    /** Only updateable fields is validated */
    public validator: ValidationRule<Api.WebShop> = rules.obj<Api.WebShop>({
        deliveryPrice: rules.num(false)
            .parseNumber({ errorMessage: "Price is not recognized as number" })
            .must(price => !price || price > 0, { errorMessage: "Delivery price must be greater than zero" })
    }).expandable();

    validate(webShop: Api.WebShop): Promise<Api.WebShop> {
        if (!webShop)
            throw new Error("webShop is undefined");

        return validate(webShop, this.validator);
    }
}