/* Stwórz następujące funkcje:

createDOM

input: (String) Tag Name (np. "div")
output: Tag (np. <div class="item">)
zadanie: stwórz element, dodaj do niego klasę item, i zwróć z funkcji

removeDOM

input: (String) CSS Selector (np. "div")
output: Tag (np. <div>)
zadanie: znajdź przekazany element, usuń go z DOM, i zwróć usunięty element z funkcji


Stwórz pliki index.js (umieść w nim powyższe funkcje) oraz index.html (gdzie umieścisz wymagane elementy DOM). */

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
