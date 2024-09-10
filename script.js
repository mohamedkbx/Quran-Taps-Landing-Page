import { clickLabel } from "./utils.js";
// select Labels
const labelElements = document.querySelectorAll("label");

labelElements.forEach((element) => clickLabel(element));
