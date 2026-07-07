fetch(`https://dummyjson.com/products`)
  .then((response) => response.json())
  .then(console.log);
