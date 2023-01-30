/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";

import "./assets/img/abuela.jpg";
import "./assets/img/pajaro.jpg";
import "./assets/img/perros.jpg";
import "./assets/img/tortuga.jpg";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];

  let action = ["ate", "peed", "crushed", "broke"];

  let what = ["my homework", "the keys", "the car"];

  let when = [
    "before the class.",
    "right on time.",
    "when I finished.",
    "during my lunch.",
    "while I was praying."
  ];

  const num1 = Math.floor(Math.random() * 4);
  const num2 = Math.floor(Math.random() * 4); // se puede multiplicar por la longitud del array, ej: action.length
  const num3 = Math.floor(Math.random() * 4);
  const num4 = Math.floor(Math.random() * 5);

  const texto =
    who[num1] + " " + action[num2] + " " + what[num3] + " " + when[num4];

  switch (num1) {
    case 0:
      const fotoperro = (document.getElementById("foto").src = "./perros.jpg");
      break;
    case 1:
      const fotoabuela = (document.getElementById("foto").src = "./abuela.jpg");
      break;
    case 2:
      const fototortuga = (document.getElementById("foto").src =
        "./tortuga.jpg");
      break;
    case 3:
      const fotopajaro = (document.getElementById("foto").src = "./pajaro.jpg");
      break;
  }

  const element = document.querySelector("#excuse");
  element.innerText = texto;

  let refresh = document.getElementById("refresh"); // COMO EL ID REFRESH ESTA EN EL BODY Y EN EL BOTON, PULSE EL BOTON O PULSE EL BODY SE ACTUALIZA
  refresh.addEventListener("click", () => {
    location.reload();
  });
};

// let refresh = document.getElementById("refresh");
// refresh.addEventListener("click", _ => {                     // ESTO ESTA COPIADO DE INTERNET PERO MEJOR USAR PARENTESIS VACIO EN VEZ DE _
//   location.reload();
// });

// document?.querySelector("#btn")?.addEventListener("click", () => {      // ESTO FUNCIONARIA SI TUVIERA UNA FUNCION QUE GENERASE
//   theExcuse.innerHTML = generateExcuse();                              // EL CODIGO ALEATORIO CADA VEZ
// });

// const element = document.getElementById("excuse");             // ESTO FUNCIONA
// element.innerHTML = texto;

// document.querySelector();
// const element = document.getElementById();                     // PROBAR
// element.innerHTML =;
