let person = {
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

let jsonData = JSON.stringify(person);
console.log(jsonData);
