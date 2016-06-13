/// <reference path="typings/index.d.ts" />

class LoginActions {
    LOGIN = "login";
}

class ProductListActions {
    RELOAD = "reload-product-list";
    LOADED = "product-list-loaded";
}

export default class ActionIdentifiers {
    static AUTHENTICATION_REQUIRED = "authentication-required";
    static RELOAD_APP = "reload-app-data";

    static Login = new LoginActions();

    static ProductList = new ProductListActions();    
}