let input = document.querySelector("#input");
let button = document.querySelector("#button");
let duplicateField = document.querySelector("#duplicateField");

//слушает нажатия в input и дублирует данные в duplicateField
input.addEventListener("keypress", (event) => {
  duplicateField.textContent =
    duplicateField.textContent + String.fromCharCode(event.charCode);
});

//слушает нажатие левой кнопкой мыши по button
//выводит в консоль данные из input, очищает его и duplicateField
button.addEventListener("mousedown", (event) => {
  event.preventDefault();
  if (event.which === 1) {
    console.log(input.value);
    input.value = "";
    duplicateField.textContent = "";
  }
});

//слушает отжатие клавиш в input
// копирует данные из input в duplicateField
//нужно для того что бы можно было изменять информацию в input
//можно удалять информацию в input с помощью Backspace и Delete
input.addEventListener("keyup", (event) => {
  if (event.key === "Backspace" || event.key === "Delete") {
    duplicateField.textContent = input.value;
  }
});
