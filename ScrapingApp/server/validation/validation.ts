/// <reference path="../typings/index.d.ts"/>

interface ValidationResult {
    ok: boolean;
    errors: {
        [path: string]: string[];
    }
}

export class Validator {
    private context = "";
    private parent: Validator;

    private errors: { [path: string]: string[] } = {};

    errorIf(isError: () => boolean, errorMessage: string): Validator {
        if (!isError)
            throw new Error("isError check is required");

        if (!isError())
            return this;

        const path = this.fullPath();
        
        let errors = this.errors[path];
        if (!errors) {
            errors = [];
            this.errors[path] = errors;
        }

        errors.push(errorMessage);

        return this;
    }

    property(propertyName: string): Validator {
        const nested = new Validator();
        let context = propertyName;

        if (this.context)
            context = `${this.context}.${propertyName}`;

        nested.context = context;
        nested.errors = this.errors;

        return nested;
    }

    indexer(index: number): Validator {
        const nested = new Validator();
        let context = `[${index}]`;

        if (this.context)
            context = `${this.context}${context}`;

        nested.context = context;
        nested.errors = this.errors;

        return nested;
    }

    array<TElement>(array: TElement[], validator: (element: TElement, acc: Validator) => void): Validator {
        array = array || [];

        array.forEach((element, index) => {
            const indexerValidator = this.indexer(index);
            validator(element, indexerValidator);
        });
        
        return this;
    }

    end(): Validator {
        if (!this.parent)
            throw new Error("No parent");

        return this.parent;
    }

    result(): ValidationResult {
        return {
            ok: Object.keys(this.errors).length === 0,
            errors: this.errors
        };
    }

    private fullPath(path?: string): string {
        if (!path && !this.context)
            throw new Error("Use property() or indexer() to define value to validate");

        if (!path)
            return this.context;

        if (!this.context)
            return path;

        return `${this.context}.${path}`;
    }
}