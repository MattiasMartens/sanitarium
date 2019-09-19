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
const fs_1 = require("fs");
const path_1 = require("path");
const os_1 = require("os");
function popPersistentRecord(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        const path = path_1.join("trial_case", "fake_filestore", fileName);
        const contents = yield fs_1.promises.readFile(path, "UTF-8");
        const lines = contents.split(os_1.EOL);
        const lastLine = lines.splice(lines.length - 1, 1)[0];
        yield fs_1.promises.writeFile(path, lines.join(os_1.EOL));
        return JSON.parse(lastLine || "null");
    });
}
exports.popPersistentRecord = popPersistentRecord;
