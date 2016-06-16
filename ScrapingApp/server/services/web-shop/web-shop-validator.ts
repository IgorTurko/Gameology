/// <reference path="../../typings/index.d.ts" />

import * as v from "../../validator";

export default class WebShopValidator {
    /** Only updateable fields is validated */
    public validator: IValidationRule<Api.WebShop, Api.WebShop> = v.expandableObject<Api.WebShop, Api.WebShop>({
        deliveryPrice: v.num()
            .must(price => price > 0, "Delivery price must be greater than zero")
    });


    validate(webShop: Api.WebShop): Api.EntityValidationResult<Api.WebShop> {
        if (!webShop)
            throw new Error("webShop is undefined");

        const result = v.validate(webShop, this.validator);
        return {
            ok: result.valid,
            entity: result.value,
            errors: result.errors
        };
    }
}