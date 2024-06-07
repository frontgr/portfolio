/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/module.js

function draw(color){
    console.log(`%c
        ███████╗██████╗  ██████╗ ███╗   ██╗████████╗ ██████╗ ██████╗ 
        ██╔════╝██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝ ██╔══██╗
        █████╗  ██████╔╝██║   ██║██╔██╗ ██║   ██║   ██║  ███╗██████╔╝
        ██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║   ██║   ██║   ██║██╔══██╗
        ██║     ██║  ██║╚██████╔╝██║ ╚████║   ██║   ╚██████╔╝██║  ██║
        ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
    ` , `background: transparent; color: ${color}`)
    console.log(`Drawing with color: ${color}`);
}


;// CONCATENATED MODULE: ./src/scripts/index.js




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

/******/ })()
;