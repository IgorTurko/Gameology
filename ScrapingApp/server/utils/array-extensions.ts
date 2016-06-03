/// <reference path="../typings/index.d.ts" />

Array.prototype.toHash = function toHash<T, K>(keySelector: (elem: T) => string, valueSelector?: (elem: T) => K): { [key: string]: K; } {
    valueSelector = valueSelector || ((e: T) => ((e as any) as K));

    return this.reduce((hash, elem) => {
        const key = keySelector(elem);
        const value = valueSelector(elem);

        hash[key] = value;

        return hash;
    },
        {}) as { [key: string]: K; };
};