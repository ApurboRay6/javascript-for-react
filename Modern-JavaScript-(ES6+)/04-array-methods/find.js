let prodacts = [
  { name: "laptop", price: 1000 },
  { name: "phone", price: 500 },
  { name: "tablet", price: 800 },
  { name: "monitor", price: 300 },
  { name: "keyboard", price: 100 },
];

let result = prodacts.find(
  (prodact) => prodact.price > 500 && prodact.price < 1000,
);
console.log(result);

// find() method returns the value of the first element in the provided array that satisfies the provided testing function. In this case, we are using find() to search for the first product object in the prodacts array that has a price property greater than 500 and less than 1000. The output will be:
// { name: "tablet", price: 800 };
