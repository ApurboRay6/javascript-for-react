let prodacts = [
  { name: "laptop", price: 1000 },
  { name: "phone", price: 500 },
  { name: "tablet", price: 800 },
  { name: "monitor", price: 300 },
  { name: "keyboard", price: 100 },
];

let result = prodacts.map((product) => {
  return product.name;
});
console.log(result);

// map() method creates a new array populated with the results of calling a provided function on every element in the calling array. In this case, we are using map() to extract the name property from each product object in the prodacts array and return a new array containing just the names of the products. The output will be:
// ["laptop", "phone", "tablet", "monitor", "keyboard"];
