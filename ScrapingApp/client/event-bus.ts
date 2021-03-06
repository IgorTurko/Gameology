﻿/// <reference path="./typings/index.d.ts" />

import {EventEmitter} from "fbemitter";

class Events{
    static AuthorizationError = "authorization-error";
    static NetworkError = "network-error";
    static DoLogin = "do-login";
    static DoFiltering = "do-filtering";
    static SaveProduct = "save-product";
}

const eventBus = new EventEmitter();

export { eventBus, Events };