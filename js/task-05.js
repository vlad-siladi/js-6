// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
  spanText: document.querySelector("#name-output").textContent,
};

refs.input.addEventListener("input", onInput);

function onInput(event) {
  refs.span.textContent = event.currentTarget.value;
  if (
    event.currentTarget.value.length === 0 ||
    event.currentTarget.value === ""
  ) {
    refs.span.textContent = refs.spanText;
  }
}
