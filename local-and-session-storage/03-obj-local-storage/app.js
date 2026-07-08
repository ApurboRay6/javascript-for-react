let saveToLocalStorage = () => {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let user = { id, name, email };
  localStorage.setItem(id, JSON.stringify(user));
};

let get = localStorage.getItem("1");
console.log(JSON.parse(get));
