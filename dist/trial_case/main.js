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
const io_ts_1 = require("io-ts");
const isolated_function_builders_1 = require("../isolated_function_builders");
const persistence_1 = require("./persistence");
const ArgType = io_ts_1.tuple([
    io_ts_1.keyof({
        push: null,
        pop: null,
        top: null
    })
]);
const ReturnType = io_ts_1.union([
    persistence_1.Todo,
    io_ts_1.nullType
]);
const _execute = (command) => __awaiter(void 0, void 0, void 0, function* () {
    if (command === "push") {
        return persistence_1.saveTask({
            name: "do " + Math.floor(Math.random() * 99),
            date: new Date().valueOf()
        });
    }
    else if (command === "pop") {
        return persistence_1.taskDone();
    }
    else if (command === "top") {
        return persistence_1.nextTask();
    }
    else {
        throw new Error(`Command not supported: ${command}`);
    }
});
exports.execute = isolated_function_builders_1.stronglyTypedFunctionAsync(_execute, {
    ArgType,
    ReturnType
});
