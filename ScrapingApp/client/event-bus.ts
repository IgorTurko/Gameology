/// <reference path="./typings/index.d.ts" />

import {EventEmitter} from "fbemitter";

class Events{
    static AuthorizationRequired = "authorization-required";
    static NetworkError = "network-error";
}

const eventBus = new EventEmitter();

export { eventBus, Events };