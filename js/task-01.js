const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((el) => {
  const titleText = el.querySelector("h2").textContent;
  const categoriesnNum = el.querySelectorAll("li").length;
  return console.log(
    `Category: ${titleText}
 Elements:  ${categoriesnNum};`
  );
});
