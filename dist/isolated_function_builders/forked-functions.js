"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forkedFunction(predicate, rootFn, altFn) {
    return (...args) => {
        if (predicate(...args)) {
            return altFn(...args);
        }
        else {
            return rootFn(...args);
        }
    };
}
exports.forkedFunction = forkedFunction;
