import "../css/main.css";

import draw from "./module.js";

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
function start() {
  setInterval(() => {
    console.clear();
    draw(randomColor());
    console.log("Wish  you great daytime!");
  }, 1000);
}
start();
