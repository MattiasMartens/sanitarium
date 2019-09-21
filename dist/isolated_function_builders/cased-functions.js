"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function casedFunction(fn, cases) {
    return (...args) => {
        const inPredicatesMatched = cases.filter(({ inPredicate }) => inPredicate(...args));
        const result = fn(...args);
        for (let { outPredicate } of inPredicatesMatched) {
            if (!outPredicate(result)) {
                throw new Error("Case failed to match");
            }
        }
        return result;
    };
}
exports.casedFunction = casedFunction;
function casedFunctionAsync(fn, cases) {
    return __awaiter(this, void 0, void 0, function* () {
        return (...args) => __awaiter(this, void 0, void 0, function* () {
            const inPredicatesMatched = cases.filter(({ inPredicate }) => inPredicate(...args));
            const result = yield fn(...args);
            for (let { outPredicate, caseName } of inPredicatesMatched) {
                if (!outPredicate(result)) {
                    throw new Error(`Case ${caseName}${caseName ? " " : ""}was triggered but its input conditions failed to meet its output conditions`);
                }
            }
            return result;
        });
    });
}
exports.casedFunctionAsync = casedFunctionAsync;
