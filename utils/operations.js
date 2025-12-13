export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((result, num, index) => {
    if (index === 0) return num;
    return result - num;
  }, 0);
}

export function multiply(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((product, num) => product * num, 1);
}

export function divide(numbers) {
  if (numbers.length === 0) return NaN;
  if (numbers.slice(1).some(num => num === 0)) {
    return NaN; // Division by zero
  }
  return numbers.reduce((result, num, index) => {
    if (index === 0) return num;
    return result / num;
  }, 0);
}

