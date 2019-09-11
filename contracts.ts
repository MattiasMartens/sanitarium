import {
  ContractFailure,
  Contract
} from "./types";
import { right, Either } from "fp-ts/lib/Either";

export function checkContract<T>(contract: Contract<T>, subject: T): Either<ContractFailure<T>, true> {
  return right(true);
}

export function getError<T>(failure: ContractFailure<T>) {
  return new Error("Contract failed");
}