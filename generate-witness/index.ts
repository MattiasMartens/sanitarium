import { Type, literal, number, string, boolean, undefined as ioUndefined, nullType, voidType, unknown, Function, UnknownArray, array, record, UnknownRecord, partial, readonlyArray, keyof, tuple, union, intersection, type, Int } from "io-ts";

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

export function generateWitness<T>(io: Type<T>): T {
  const _tag = io["_tag"];

  if (_tag in standardDefaults) {
    return standardDefaults[_tag] as any as T;
  } else if (_tag === "LiteralType") {
    return io["value"];
  } else if (_tag === "KeyofType") {
    return Object.keys(io["keys"])[0] as any as T;
  } else if (_tag === "TupleType") {
    return io["types"].map((io: Type<any>) => generateWitness(io));
  } else if (_tag === "UnionType") {
    return generateWitness(io["types"][0]);
  } else if (_tag === "IntersectionType") {
    throw new Error("Not implemented");
  } else if (_tag === "InterfaceType") {
    const seed = {};
    for (let [key, subIo] of Object.entries(io["props"])) {
      seed[key] = generateWitness(subIo as any);
    }
    return seed as T;
  }

  return {} as T;
}

function assertIsOfType(obj: any, io: Type<any>) {
  if (io.is(obj)) {
    console.log(`Successfully generated ${JSON.stringify(obj)}`);
  } else {
    throw new Error(`Generated object failed to satisfy type constraint: ${JSON.stringify(obj)}`);
  }
}

function testGenerateWitness(io: Type<any>, debug = false) {
  if (debug) {
    console.log(`Debugging ${io["_tag"]}`)
    debugger;
  }

  const witness = generateWitness(io);

  assertIsOfType(
    witness,
    io
  )
}

const debug = true;
testGenerateWitness(literal(0));
testGenerateWitness(number);
testGenerateWitness(string);
testGenerateWitness(boolean);
testGenerateWitness(ioUndefined);
testGenerateWitness(nullType);
testGenerateWitness(voidType);
testGenerateWitness(unknown);
testGenerateWitness(Function);
testGenerateWitness(UnknownArray);
testGenerateWitness(array(unknown));
testGenerateWitness(record(unknown, unknown));
testGenerateWitness(UnknownRecord);
testGenerateWitness(partial({}));
testGenerateWitness(readonlyArray(unknown));
testGenerateWitness(keyof({
  a: true,
  b: true
}));
testGenerateWitness(tuple([string, number]));
testGenerateWitness(union([string, number]));
//testGenerateWitness(intersection([string, number]));
testGenerateWitness(type({
  a: boolean
}));
