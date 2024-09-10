// select Labels
const labelElements = document.querySelectorAll("label");

labelElements.forEach((element) =>
  element.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      element.click();
    }
  })
);
