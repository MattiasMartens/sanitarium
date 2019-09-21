import { stronglyTypedFunction } from "../isolated_function_builders";
import { generateWitness } from "../generate-witness";
import { Type, literal, string, TypeOf, tuple, array } from "io-ts";

function testTypedFunction(fn: ReturnType<typeof stronglyTypedFunction>) {
  if (!fn.types.ReturnType || !fn.types.ArgType) {
    throw new Error("Cannot test by type");
  }

  const input = generateWitness(fn.types.ArgType);

  const out = fn(...input);

  if (fn.types.ReturnType.is(out)) {
    console.log("Test passed");
  } else {
    throw new Error("Test failed");
  }
}

testTypedFunction(
  stronglyTypedFunction(a => a.split(""), {
    ArgType: tuple([string]),
    ReturnType: array(string)
  })
)