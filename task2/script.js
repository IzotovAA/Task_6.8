document.querySelector("#consoleLog").addEventListener("click", () => {
  alert("метод для вывода сообщения в вэб консоль");
});

document.querySelector("#alert").addEventListener("click", () => {
  alert(
    "функция для вывода в вэб приложение модального окна с сообщением, ожидает пока пользователь не нажмёт 'OK'"
  );
});

document.querySelector("#prompt").addEventListener("click", () => {
  alert(
    "функция для вывода в вэб приложение модального окна с сообщением, а так же с полем для ввода информации и кнопками 'OK' и 'Отмена'"
  );
});
