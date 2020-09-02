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
exports.providerFunctionAsync = exports.providerFunction = void 0;
function providerFunction(fn) {
    const dependency = {
        val: undefined,
        fn
    };
    const interveneFunction = function () {
        if (dependency.val === undefined) {
            dependency.val = fn();
        }
        return dependency.val;
    };
    interveneFunction.override = (val) => dependency.val = val;
    return interveneFunction;
}
exports.providerFunction = providerFunction;
function providerFunctionAsync(fn) {
    const dependency = {
        val: undefined,
        fn
    };
    const interveneFunction = function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (dependency.val === undefined) {
                dependency.val = fn();
            }
            return yield dependency.val;
        });
    };
    interveneFunction.override = (val) => dependency.val = val;
    return interveneFunction;
}
exports.providerFunctionAsync = providerFunctionAsync;
