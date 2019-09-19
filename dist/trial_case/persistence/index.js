"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const io_ts_1 = require("io-ts");
exports.Todo = io_ts_1.type({
    name: io_ts_1.string,
    date: io_ts_1.number
});
__export(require("./next-task"));
__export(require("./task-done"));
__export(require("./save-task"));
