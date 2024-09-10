// handle Click Label
export function clickLabel(element) {
  element.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      element.click();
    }
  });
}

// animate on scroll
export function animateOnScroll(sectionElements) {
  let options = { threshold: 0.5 };

  let callbackfn = (entries) => {
    entries.forEach((entry) => {
      //desired code
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  };
  const observer = new IntersectionObserver(callbackfn, options);

  sectionElements.forEach((element) => observer.observe(element));
}
