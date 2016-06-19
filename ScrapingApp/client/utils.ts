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