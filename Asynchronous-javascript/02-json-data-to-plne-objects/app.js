let parson = {
  name: "John",
  age: 30,
  city: "New York",
  family: {
    wife: "Jane",
    children: ["Jack", "Jill"],
    father: "Robert",
    mother: "Mary",
  },
};

let jsonData = JSON.stringify(prson);

let parsedData = JSON.parse(jsonData);
console.log(parsedData);
