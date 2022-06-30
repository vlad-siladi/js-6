const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredient = document.querySelector("#ingredients");

const elements = ingredients.map((element) => {
  const newEl = document.createElement("li");
  newEl.classList.add("item");
  newEl.textContent = element;
  return newEl;
});

ingredient.append(...elements);
