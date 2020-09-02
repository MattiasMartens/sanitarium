"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateWitness = void 0;
const io_ts_1 = require("io-ts");
const standardDefaults = {
    NumberType: 0,
    StringType: "",
    BooleanType: false,
    UndefinedType: undefined,
    VoidType: undefined,
    NullType: null,
    UnknownType: 0,
    FunctionType: () => undefined,
    AnyArrayType: [],
    ArrayType: [],
    DictionaryType: {},
    AnyDictionaryType: {},
    PartialType: {},
    ReadonlyArrayType: []
};
function generateWitness(io) {
    const _tag = io["_tag"];
    if (_tag in standardDefaults) {
        return standardDefaults[_tag];
    }
    else if (_tag === "LiteralType") {
        return io["value"];
    }
    else if (_tag === "KeyofType") {
        return Object.keys(io["keys"])[0];
    }
    else if (_tag === "TupleType") {
        return io["types"].map((io) => generateWitness(io));
    }
    else if (_tag === "UnionType") {
        return generateWitness(io["types"][0]);
    }
    else if (_tag === "IntersectionType") {
        throw new Error("Not implemented");
    }
    else if (_tag === "InterfaceType") {
        const seed = {};
        for (let [key, subIo] of Object.entries(io["props"])) {
            seed[key] = generateWitness(subIo);
        }
        return seed;
    }
    return {};
}
exports.generateWitness = generateWitness;
function assertIsOfType(obj, io) {
    if (io.is(obj)) {
        console.log(`Successfully generated ${JSON.stringify(obj)}`);
    }
    else {
        throw new Error(`Generated object failed to satisfy type constraint: ${JSON.stringify(obj)}`);
    }
}
function testGenerateWitness(io, debug = false) {
    if (debug) {
        console.log(`Debugging ${io["_tag"]}`);
        debugger;
    }
    const witness = generateWitness(io);
    assertIsOfType(witness, io);
}
const debug = true;
testGenerateWitness(io_ts_1.literal(0));
testGenerateWitness(io_ts_1.number);
testGenerateWitness(io_ts_1.string);
testGenerateWitness(io_ts_1.boolean);
testGenerateWitness(io_ts_1.undefined);
testGenerateWitness(io_ts_1.nullType);
testGenerateWitness(io_ts_1.voidType);
testGenerateWitness(io_ts_1.unknown);
testGenerateWitness(io_ts_1.Function);
testGenerateWitness(io_ts_1.UnknownArray);
testGenerateWitness(io_ts_1.array(io_ts_1.unknown));
testGenerateWitness(io_ts_1.record(io_ts_1.unknown, io_ts_1.unknown));
testGenerateWitness(io_ts_1.UnknownRecord);
testGenerateWitness(io_ts_1.partial({}));
testGenerateWitness(io_ts_1.readonlyArray(io_ts_1.unknown));
testGenerateWitness(io_ts_1.keyof({
    a: true,
    b: true
}));
testGenerateWitness(io_ts_1.tuple([io_ts_1.string, io_ts_1.number]));
testGenerateWitness(io_ts_1.union([io_ts_1.string, io_ts_1.number]));
//testGenerateWitness(intersection([string, number]));
testGenerateWitness(io_ts_1.type({
    a: io_ts_1.boolean
}));
