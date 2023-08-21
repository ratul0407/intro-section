"use strict";
const featuresEl = document.querySelector(".features");
console.log(featuresEl);
const firstArrowEl = document.querySelector(".first-down-arrow");
const secondArrowEl = document.querySelector(".second-down-arrow");
const companyEl = document.querySelector(".company");
const companyDropDownEl = document.querySelector(".company-drop-down");
const hamburger = document.querySelector(".hamburger");
console.log(firstArrowEl);
featuresEl.addEventListener("click", () => {
  firstArrowEl.src = "assets/icon-arrow-up.svg";
  document.querySelector(".features-dropdown").classList.toggle("hidden");
});

companyEl.addEventListener("click", () => {
  companyDropDownEl.classList.toggle("hidden");
  secondArrowEl.src = "assets/icon-arrow-up.svg";
});
hamburger.addEventListener("click", () => {
  hamburger.classList.add("hidden");
  document.querySelector(".cross").classList.remove("hidden");
  document.querySelector(".mobile-list-items").classList.remove("hidden");
});

document.querySelector(".cross").addEventListener("click", () => {
  hamburger.classList.remove("hidden");
  document.querySelector(".cross").classList.add("hidden");
  document.querySelector(".mobile-list-items").classList.add("hidden");
});
