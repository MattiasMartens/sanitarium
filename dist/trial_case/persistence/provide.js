"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provide = void 0;
const io_1 = require("./io");
const config_1 = require("../config");
function provide() {
    const { TODO_FILE } = config_1.release();
    const IO = io_1.release(TODO_FILE);
    return IO;
}
exports.provide = provide;
