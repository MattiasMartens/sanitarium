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
const PathReporter_1 = require("io-ts/lib/PathReporter");
function stronglyTypedFunction(fn, types) {
    const { ArgType, ReturnType } = types;
    return (...args) => {
        if (!!ArgType && !ArgType.is(args)) {
            throw new Error(`Incorrect type supplied to function: ${PathReporter_1.PathReporter.report(ArgType.decode(args))}`);
        }
        const result = fn(...args);
        if (!!ReturnType && !ReturnType.is(result)) {
            throw new Error(`Function returned with incorrect type: ${PathReporter_1.PathReporter.report(ReturnType.decode(result))}`);
        }
        return result;
    };
}
exports.stronglyTypedFunction = stronglyTypedFunction;
function stronglyTypedFunctionAsync(fn, types) {
    const { ArgType, ReturnType } = types;
    return (...args) => __awaiter(this, void 0, void 0, function* () {
        if (!!ArgType && !ArgType.is(args)) {
            throw new Error(`Incorrect type supplied to function: ${PathReporter_1.PathReporter.report(ArgType.decode(args))}`);
        }
        const result = yield fn(...args);
        if (!!ReturnType && !ReturnType.is(result)) {
            throw new Error(`Function returned with incorrect type: ${PathReporter_1.PathReporter.report(ReturnType.decode(result))}`);
        }
        return result;
    });
}
exports.stronglyTypedFunctionAsync = stronglyTypedFunctionAsync;
