"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guardedFunction = void 0;
function guardedFunction(fn, constraints) {
    return (...args) => {
        for (let constraint of constraints) {
            const pred = constraint(...args);
            if (pred !== true) {
                throw new Error(typeof pred === "string" ? pred : "Constraint failed");
            }
        }
        return fn(...args);
    };
}
exports.guardedFunction = guardedFunction;
