"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fiatFunction(fn, fiats) {
    return (...args) => {
        for (let fiat of fiats) {
            const result = fiat(...args);
            if (result._tag === "Some") {
                return result.value;
            }
        }
        return fn(...args);
    };
}
exports.fiatFunction = fiatFunction;
