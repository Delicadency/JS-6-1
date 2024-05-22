function createDOM(tagName) {
  if (typeof tagName !== "string" || tagName === "") {
    console.error("Wprowadź prawidłową nazwę tagu, który chcesz utworzyć.");
    return;
  }
  const tag = document.createElement(tagName);
  tag.classList.add("item");
  const body = document.querySelector("body");
  body.insertAdjacentElement("beforeend", tag);
  return tag;
}

function removeDOM(selector) {
  if (typeof selector !== "string" || selector === "") {
    console.error(
      "Wprowadź prawidłową nazwę dla selektora, którego chcesz usunąć."
    );
    return;
  }
  const tagToRemove = document.querySelector(selector);
  if (!tagToRemove) {
    console.error("Nie znaleziono elementu w drzewie DOM.");
    return;
  }
  const body = document.querySelector("body");
  body.removeChild(tagToRemove);
  return tagToRemove;
}
