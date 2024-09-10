import { animateOnScroll, clickLabel } from "./utils.js";
// select Labels
const labelElements = document.querySelectorAll("label");

labelElements.forEach((element) => clickLabel(element));
// animate on scroll
const sectionElements = document.querySelectorAll("section");

animateOnScroll(sectionElements);
