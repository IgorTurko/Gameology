/**
 * Array extension
 */
interface Array<T> {
    toHash<K>(keySelector: (elem: T) => string, valueSelector?: (elem: T) => K): { [key: string]: K; };
}

interface ObjectConstructor {
    entries(obj: any): any[][];
}

interface LoginState {
    isLoginRequired: boolean;    
    isLogging: boolean;
    credentials: Api.AuthenticationCredentials;
    error: string;
}

interface Products {
    isLoading: boolean;
    products: Api.Product[];
    shops: Api.WebShop[];
    search: string;
    filteredProducts: Api.Product[];
}

interface AppState {
    login: LoginState;
    products: Products;
}