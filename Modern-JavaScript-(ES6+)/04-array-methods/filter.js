let prodacts = [
  { name: "laptop", price: 1000 },
  { name: "laptop", price: 2000 },
  { name: "phone", price: 500 },
  { name: "tablet", price: 800 },
  { name: "monitor", price: 300 },
  { name: "keyboard", price: 100 },
];

let result = prodacts.filter((prodact) => prodact.name === "laptop");
console.log(result);

// filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, we are using filter() to find all product objects in the prodacts array that have a name property equal to "laptop". The output will be:
// [{ name: "laptop", price: 1000 }];
