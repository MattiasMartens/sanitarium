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
const manifest = require("./manifest");
const fs_1 = require("fs");
const path_1 = require("path");
function release(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO these bindings can be automated
        // TODO typing breaks here
        const path = path_1.join("trial_case", "fake_filestore", fileName);
        if (!fs_1.existsSync(path)) {
            yield fs_1.promises.writeFile(path, "", {
                flag: "w"
            });
            console.log(fs_1.existsSync(path));
        }
        return {
            popPersistentRecord: manifest.popPersistentRecord.bind(null, fileName),
            pushPersistentRecord: manifest.pushPersistentRecord.bind(null, fileName),
            topPersistentRecord: manifest.topPersistentRecord.bind(null, fileName)
        };
    });
}
exports.release = release;
