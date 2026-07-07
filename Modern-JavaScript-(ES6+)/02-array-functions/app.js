let arrFn = (a, b) => a + b;
let sum = arrFn(5, 10);
console.log(sum);

let arrFn2 = (a, b) => {
  let result = a + b;
  return result;
};
console.log(arrFn2(5, 10));

// array functions are a more concise way to write functions in JavaScript. They use the arrow syntax (=>) and do not have their own 'this' context, making them useful for certain scenarios like callbacks and array methods.
