import { LINE, isValid } from "./vending.ts";

// v2: one breath, machine-voiced, punch on the last line.
if (!isValid(LINE)) {
  throw new Error("entry failed the 1-200 character gate");
}
if (LINE.includes("\n")) {
  throw new Error("a vending machine pickup line must be a single line");
}
console.log(LINE);
