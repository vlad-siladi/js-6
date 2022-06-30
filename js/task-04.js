// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const refs = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  buttonincrement: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

refs.buttonDecrement.addEventListener("click", onbuttonDecrementSubmit);
refs.buttonincrement.addEventListener("click", onbuttonIncrementSubmit);

let valueNumber = Number(refs.value.textContent);

function onbuttonDecrementSubmit() {
  valueNumber -= 1;
  refs.value.textContent = valueNumber;
}

function onbuttonIncrementSubmit() {
  valueNumber += 1;
  refs.value.textContent = valueNumber;
}
