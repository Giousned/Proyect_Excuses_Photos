/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/abuela.jpg";
import "./assets/img/pajaro.jpg";
import "./assets/img/perros.jpg";

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
    who[num1] + "" + action[num2] + " " + what[num3] + " " + when[num4];

  const foto = (document.getElementById("foto").src = "./pajaro.jpg");

  // if (num1) {
  //   const foto = document.querySelector("src");
  //   element.innerText =
  //     /workspace/aaijllnsv - hello / src / assets / img / abuela.jpeg;
  // }

  const element = document.querySelector("#excuse");
  element.innerText = texto;

  // const element = document.getElementById("excuse");         ESTO FUNCIONA
  // element.innerHTML = texto;

  // document.querySelector();
  // const element = document.getElementById();             PROBAR
  // element.innerHTML =;
};
