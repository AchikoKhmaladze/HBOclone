"use strict";

const hamburger = document.querySelector("#hamburger");
const header = document.getElementById("toggle");
const toggle = document.querySelector("active");
const body = document.querySelector("body");

hamburger.addEventListener("click", function () {
  header.classList.toggle("active");
  hamburger.classList.toggle("toggleBurger");
  hamburger.style.toggle.style.traniston = "all 0.5s";
});
