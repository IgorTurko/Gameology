/// <reference path="./typings/index.d.ts" />

export function debounce(delayMilliseconds: number): (action: () => void) => void {
    if (delayMilliseconds < 0) {
        throw new Error("Delay must be positive");
    }

    let timeout: number = null;

    return action => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            timeout = null;
            action();
        }, delayMilliseconds);
    };
}

function classNamesFromHash(hash) {
    if (!hash) {
        return [];
    }

    return Object.keys(hash)
        .filter(k => !!hash[k]);
}


export function classNames(...args) {
    return args.map(a => {
        if (Array.isArray(a))
            return a.join(" ");

        if (typeof a === typeof "")
            return a;

        return classNamesFromHash(a).join(" ");
    }).join(" ");
}