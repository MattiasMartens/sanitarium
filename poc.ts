import {
  strictFunction
} from "./functions";
import { tuple, string, number } from "io-ts";

const getWeekDayIndex = strictFunction(
  function getWeekDayIndex(weekday: string) {
    return 1;
  },
  {
    inContract: {
      type: tuple([string])
    },
    outContract: {
      type: number
    }
  }
);

console.log(getWeekDayIndex(""));
console.log(getWeekDayIndex(undefined as any));
