// handle Click Label
export function clickLabel(element) {
  element.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      element.click();
    }
  });
}
