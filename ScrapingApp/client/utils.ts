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

export function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);        

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}