/// <reference path="typings/index.d.ts" />

if (!Array.prototype.toHash) {
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
}

if (!Array.prototype.flattern) {
    Array.prototype.flattern = function flattern<T, K>(selector: (elem: T) => K[]): K[] {
        const result: K[] = [];

        for (let e of this) {
            const subArray = selector(e);
            if (subArray) {
                result.push(...subArray);
            }
        }

        return result;
    }
}


if (!Array.prototype.min) {
    Array.prototype.min = function min<T, K>(selector: (elem: T) => K): T {
        const self: T[] = this;
        if (!self.length) {
            return null;
        }

        let minElement = self[0];
        let minValue = selector(minElement);

        for (let i = 1; i < self.length; i++) {
            let element = self[i];
            let value = selector(element);

            if (value < minValue) {
                minValue = value;
                minElement = element;
            }
        }

        return minElement;
    }
}

if (!Array.prototype.max) {
    Array.prototype.max = function min<T, K>(selector: (elem: T) => K): T {
        const self: T[] = this;
        if (!self.length) {
            return null;
        }

        let maxElement = self[0];
        let maxValue = selector(maxElement);

        for (let i = 1; i < self.length; i++) {
            let element = self[i];
            let value = selector(element);

            if (value > maxValue) {
                maxValue = value;
                maxElement = element;
            }
        }

        return maxElement;
    }
}



if (!Object.entries) {
    Object.entries = (obj: any) => Object.keys(obj)
        .map(key => ([key, obj[key]]));
}