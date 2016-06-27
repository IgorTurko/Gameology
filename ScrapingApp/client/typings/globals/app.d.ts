﻿/**
 * Array extension
 */
interface Array<T> {
    toHash<K>(keySelector: (elem: T) => string, valueSelector?: (elem: T) => K): { [key: string]: K; };
    
    /** Combines arrays returned by function applied to each element into one array. */
    flattern<K>(selector: (elem: T) => K[]): K[];
}

interface ObjectConstructor {
    entries(obj: any): any[][];
    assign(target: any, ...sources: any[]): any;
}


declare namespace AppState {

    interface Login {
        isLoginRequired: boolean;
        isLogging: boolean;
        error: string;
    }

    interface CurrentProduct {
        product: Api.Product,
        shops: Api.WebShop[];
        errors: {
            [path: string]: string[];
        },
        saved: boolean
    }

    interface Products {
        isLoading: boolean;
        products: Api.Product[];
        shops: Api.WebShop[];
        search: string;
        filteredProducts: Api.Product[];
        updatedProductId: string;
    }

    interface ShopEditing {
        [shopId: string]: {
            deliveryPrice: any;
            errorMessage: string;
        };
    }

    interface App {
        login: Login;
        products: Products;
        currentProduct: CurrentProduct;
        shopEditing: ShopEditing;
    }
}