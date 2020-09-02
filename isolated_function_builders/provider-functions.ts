export function providerFunction<DependencyShape>(fn: () => DependencyShape) {
  const dependency = {
    val: undefined,
    fn
  }

  const interveneFunction = function () {
    if (dependency.val === undefined) {
      dependency.val = fn();
    }

    return dependency.val;
  }

  interveneFunction.override = (val: DependencyShape) => dependency.val = val;

  return interveneFunction;
}

export function providerFunctionAsync<DependencyShape>(fn: () => Promise<DependencyShape>) {
  const dependency = {
    val: undefined,
    fn
  }

  const interveneFunction = async function () {
    if (dependency.val === undefined) {
      dependency.val = fn();
    }

    return await dependency.val;
  }

  interveneFunction.override = (val: Promise<DependencyShape>) => dependency.val = val;

  return interveneFunction;
}