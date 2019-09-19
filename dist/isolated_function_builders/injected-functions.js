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
function injectedFunction(provider, fn) {
    let localOverride;
    const injected = (...args) => fn(localOverride || provider(), ...args);
    injected.override = (provided) => localOverride = provided;
    return injected;
}
exports.injectedFunction = injectedFunction;
function injectedFunctionAsync(provider, fn) {
    const providedPromise = provider();
    const injected = (...args) => __awaiter(this, void 0, void 0, function* () {
        const provided = yield providedPromise;
        return yield fn(provided, ...args);
    });
    injected.providedAsync = providedPromise;
    return injected;
}
exports.injectedFunctionAsync = injectedFunctionAsync;
