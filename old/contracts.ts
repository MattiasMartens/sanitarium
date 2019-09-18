import {
  ContractFailure,
  Contract,
  Constraint
} from "./types";
import { right, Either, left, isRight } from "fp-ts/lib/Either";
import { PathReporter } from "io-ts/lib/PathReporter";

export function checkContract<T>(contract: Contract<T>, subject: T): Either<ContractFailure<T>, true> {
  const {
    type,
    constraint
  } = contract;

  if (type.is(subject)) {
    if (constraint) {
      const constraintResult = constraint(subject);

      if (isRight(constraintResult)) {
        return right(true);
      } else {
        return left({
          failedInput: subject,
          expectedType: type,
          failingConstraint: constraintResult.left
        });
      }
    } else {
      return right(true);
    }
  } else {
    return left({
      failedInput: subject,
      expectedType: type
    });
  }
}

export function getError<T>(failure: ContractFailure<T>) {
  const errorString = failure.failedAssertions
    ? failure.failedAssertions.map((failedAssertion) => {
      JSON.stringify(failedAssertion)
    }).join()
    : PathReporter.report(
      failure.expectedType.decode(failure.failedInput)
    ).join();

    return errorString;
}