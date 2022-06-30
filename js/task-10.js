// Напиши скрипт создания и очистки коллекции элементов. Пользователь
// вводит количество элементов в input и нажимает кнопку Создать, после
// чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция
//  элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр
//  - число.Функция создает столько < div >, сколько указано в amount и
//   добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
//  Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое
// div#boxes, тем самым удаляя все созданные элементы.
const refs = {
  input: document.querySelector('input[type="number"]'),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  box: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

// const amount = Number(refs.input.value);
// console.log(amount);

function createBoxes(amount) {
  amount = Number(refs.input.value);
  let nunWidth = 30;
  let nunHeight = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");

    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = (nunWidth += 10) + "px";
    boxEl.style.height = (nunHeight += 10) + "px";
    boxEl.style.border = "1px solid #212121";

    refs.box.appendChild(boxEl);
  }
}

function destroyBoxes() {
  refs.box.innerHTML = " ";
  refs.input.value = "";
  // refs.box.remove(boxEl);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
