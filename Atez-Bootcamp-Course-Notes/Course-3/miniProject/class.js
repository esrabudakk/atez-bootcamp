"use strict";
// Icin Bir Class yazacagiz Calssimizida
// tum Urunleri donecek bir fonksiyon.
// tum Telefonlri, tabletleri ve televizyonlari donen bir fonksiyon olacak.
// Text Search yapabilecek bir fonksiyornumuz olacak.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var models_1 = require("./models");
var ProductApi = /** @class */ (function () {
    function ProductApi() {
    }
    ProductApi.prototype.findAll = function () {
        var products = [];
        for (var i = 0; i < models_1.dummyData.length; i++) {
            var currentProduct = models_1.dummyData[i];
            var rest = {
                title: currentProduct.title,
                description: currentProduct.description,
                rating: currentProduct.rating,
                price: currentProduct.price,
                id: currentProduct.id,
                thumbnail: currentProduct.thumbnail
            };
            if (models_1.dummyData[i].category === "smartphones") {
                products.push(__assign(__assign({}, rest), { color: currentProduct.color }));
            }
            else if (models_1.dummyData[i].category === "laptop") {
                products.push(__assign(__assign({}, rest), { discountPercentage: currentProduct.discountPercentage, screenDimentions: currentProduct.screenDimentions }));
            }
            else if (models_1.dummyData[i].category === "television") {
                products.push(__assign(__assign({}, rest), { smartTv: currentProduct.smartTv, stock: currentProduct.stock }));
            }
            else if (models_1.dummyData[i].category === "tablet") {
                products.push(__assign(__assign({}, rest), { celluar: currentProduct.celluar, color: currentProduct.color, wifi: currentProduct.wifi }));
            }
        }
        return products;
    };
    ProductApi.prototype.findByCategory = function (category) {
        var product = [];
        for (var i = 0; i < models_1.dummyData.length; i++) {
            var currentProduct = models_1.dummyData[i];
            if (models_1.dummyData[i].category === category) {
                var rest = {
                    title: currentProduct.title,
                    description: currentProduct.description,
                    rating: currentProduct.rating,
                    price: currentProduct.price,
                    id: currentProduct.id,
                    thumbnail: currentProduct.thumbnail
                };
                if (category === "laptop") {
                    product.push(__assign(__assign({}, rest), { discountPercentage: currentProduct.discountPercentage, screenDimentions: currentProduct.screenDimentions }));
                }
                else if (category === "smartphones") {
                    product.push(__assign(__assign({}, rest), { color: currentProduct.color }));
                }
                else if (category === "television") {
                    product.push(__assign(__assign({}, rest), { smartTv: currentProduct.smartTv, stock: currentProduct.stock }));
                }
                else if (category === "tablet") {
                    product.push(__assign(__assign({}, rest), { celluar: currentProduct.celluar, color: currentProduct.color, wifi: currentProduct.wifi }));
                }
            }
        }
        return product;
    };
    ProductApi.prototype.findByText = function (input) {
        var filteredProducts = [];
        var currentProduct;
        for (var i = 0; i < models_1.dummyData.length; i++) {
            currentProduct = models_1.dummyData[i];
            for (var key in currentProduct)
                if (currentProduct[key].toString().includes(input)) {
                    filteredProducts.push(currentProduct);
                }
        }
        return filteredProducts;
    };
    return ProductApi;
}());
var A = new ProductApi();
// console.log(A.findAll())
console.log(A.findByText("Galaxy S23"));
console.log(A.findByCategory("laptop"));
// NOTLAR
// Birden fazla dosyada calisabilirsiniz.
// Baska hangi metodlar olabilir? Bir E-Ticaret sistemine yonelik oldugunu goz onunde bulundurarak.
// Calisabilir durumda ve test edilmis olmasi onemli.
// Naminglere dikkat edilmesi gereklidir. Isimlendirme sablonu benzer sekilde olmalidir.
//
