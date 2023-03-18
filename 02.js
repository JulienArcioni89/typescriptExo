"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = exports.prop = exports.subtract = void 0;
function subtract(a, b) {
    return a - b;
}
exports.subtract = subtract;
function prop(obj, propName) {
    return obj[propName];
}
exports.prop = prop;
/**
*
* @param {Array} input un tableau de donnée
* @param {Function} fn une fonction de traitement qui prend en paramètre un tableau de donnée
* @return {Array} un tableau de donnée filtré du même type que le tableau d'entrée
*/
function filter(fn, input) {
    return fn(input);
}
exports.filter = filter;
class DownloadProduct {
    constructor(product) {
    }
}
class ShipableProduct {
    constructor(product) {
    }
}
function isDownloadProduct(arg) {
    return arg.file !== undefined;
}
function productFactory(product) {
    if (isDownloadProduct(product)) {
        new DownloadProduct(product);
    }
    else {
        new ShipableProduct(product);
    }
}
