import _ from "lodash";

export function parseNumbers(input) {
  const numbers = _.map(input, (str) => Number(str));
  return numbers.filter(num => !isNaN(num));
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}

