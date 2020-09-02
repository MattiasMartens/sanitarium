"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const io_ts_1 = require("io-ts");
exports.Todo = io_ts_1.type({
    name: io_ts_1.string,
    date: io_ts_1.number
});
__exportStar(require("./next-task"), exports);
__exportStar(require("./task-done"), exports);
__exportStar(require("./save-task"), exports);
