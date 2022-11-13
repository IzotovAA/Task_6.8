let link = document.querySelector("#link");
link.addEventListener("click", (event) => {
  event.preventDefault();
  let newText = prompt("Введите текст");
  link.textContent = newText;
});
