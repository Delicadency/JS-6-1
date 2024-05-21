function createDOM(tagName) {
  if (typeof tagName !== "string") {
    console.error("Wprowadź prawidłową nazwę tagu, który chcesz utworzyć.");
    return null;
  }

  const tag = document.createElement(tagName);
  tag.classList.add("item");
  const body = document.querySelector("body");
  body.insertAdjacentElement("afterbegin", tag);

  document.addEventListener("DOMContentLoaded", () => {
    createDOM(tagName);
  });
}

function removeDOM(selector) {
  if (typeof selector !== "string") {
    console.error(
      "Wprowadź prawidłową nazwę dla selektora, którego chcesz usunąć."
    );
    return null;
  }
  const selectorRM = document.querySelector(selector);
  const body = document.querySelector("body");
  body.removeChild(selectorRM);

  document.addEventListener("DOMContentLoaded", () => {
    removeDOM(selector);
  });
}
