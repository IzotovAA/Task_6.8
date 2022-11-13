let input = document.querySelector("#input");
let button = document.querySelector("#button");
let duplicateField = document.querySelector("#duplicateField");

input.addEventListener("keypress", (event) => {
  duplicateField.textContent =
    duplicateField.textContent + String.fromCharCode(event.charCode);
});

button.addEventListener("mousedown", (event) => {
  event.preventDefault();
  if (event.which === 1) {
    console.log(input.value);
    input.value = "";
    duplicateField.textContent = "";
  }
});
