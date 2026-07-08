let saveToLocalStorage = () => {
  let id = document.getElementById("id").value;
  let name = document.getElementById("myInput").value;
  localStorage.setItem(id, name);
};
