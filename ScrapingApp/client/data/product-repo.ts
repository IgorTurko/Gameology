/// <reference path="../typings/index.d.ts"/>

class ProductDetails {
    url: string;
    image: string;
}

class Product {
    name: string;
    data: ProductDetails[];
}

class ProductRepository {
    getAllProducts(): Product[]  {
        return fetch('www.google.com')
            .then(function (response) {
                return null;
            })
            .catch(function () {
                console.log('exception');
                return null;
            })
    }
}