/// <reference path="../typings/index.d.ts" />

import { validate as validateWithCallback, ValidationRule } from "pojo-fluent-validator";

export function validate<T>(value: any, ...validators: ValidationRule<T>[]): Promise<T> {
    if (!validators || !validators.length) {
        throw new Error("At least one validator is required");
    }

    return new Promise((resolve, reject) => {
        validateWithCallback(
            value,
            (result, errors) => {
                if (errors) {
                    reject(errors);
                }
                else {
                    resolve(result);
                };
            },
            ...validators);
    });
}