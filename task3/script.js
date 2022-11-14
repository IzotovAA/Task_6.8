const trafficLightEl = document.querySelectorAll(".trafficLight");
const trafficLightEl1 = document.querySelector("#trafficLight_1");
const trafficLightEl2 = document.querySelector("#trafficLight_2");
const trafficLightEl3 = document.querySelector("#trafficLight_3");

function makeGreen() {
  trafficLightEl1.style.background = "green";
  delMassListener(trafficLightEl, makeGreen);
  addMassListener(trafficLightEl, makeYellow);
  trafficLightEl3.style.background = "black";
}

function makeYellow() {
  trafficLightEl2.style.background = "yellow";
  delMassListener(trafficLightEl, makeYellow);
  addMassListener(trafficLightEl, makeRed);
  trafficLightEl1.style.background = "black";
}

function makeRed() {
  trafficLightEl3.style.background = "red";
  delMassListener(trafficLightEl, makeRed);
  addMassListener(trafficLightEl, makeGreen);
  trafficLightEl2.style.background = "black";
}

//добавляет слушатель по массиву
function addMassListener(trafficLights, func) {
  trafficLights.forEach((element) => {
    element.addEventListener("click", func);
  });
}

//удаляет слушатель по массиву
function delMassListener(trafficLights, func) {
  trafficLights.forEach((element) => {
    element.removeEventListener("click", func);
  });
}

addMassListener(trafficLightEl, makeGreen);
