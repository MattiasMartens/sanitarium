"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isolated_function_builders_1 = require("../isolated_function_builders");
const generate_witness_1 = require("../generate-witness");
const io_ts_1 = require("io-ts");
function testTypedFunction(fn) {
    if (!fn.types.ReturnType || !fn.types.ArgType) {
        throw new Error("Cannot test by type");
    }
    const input = generate_witness_1.generateWitness(fn.types.ArgType);
    const out = fn(...input);
    if (fn.types.ReturnType.is(out)) {
        console.log("Test passed");
    }
    else {
        throw new Error("Test failed");
    }
}
testTypedFunction(isolated_function_builders_1.stronglyTypedFunction(a => a.split(""), {
    ArgType: io_ts_1.tuple([io_ts_1.string]),
    ReturnType: io_ts_1.array(io_ts_1.string)
}));
