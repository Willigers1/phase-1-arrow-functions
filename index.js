const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero not allowed");
  }
  return a / b;
};

const square = (i) => Math.pow(i, 2);

const add = (x, y) => x + y;
