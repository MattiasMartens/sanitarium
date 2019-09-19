export function providerFunction<DependencyShape>(fn: () => DependencyShape) {
  const dependency = {
    val: fn()
  }

  const interveneFunction = function() {
    return dependency.val;
  }

  interveneFunction.override = (val: DependencyShape) => dependency.val = val;

  return interveneFunction;
}

export function providerFunctionAsync<DependencyShape>(fn: () => Promise<DependencyShape>) {
  const dependency = {
    val: fn()
  }

  const interveneFunction = async function() {
    return await dependency.val;
  }

  interveneFunction.override = (val: Promise<DependencyShape>) => dependency.val = val;

  return interveneFunction;
}