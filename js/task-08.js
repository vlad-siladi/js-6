/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
Обработка отправки формы form.login-form
 должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с
 предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму,
 собери значения полей в обьект, где имя поля будет именем
  свойства, а значение поля - значением свойства. Для
   доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти 
значения полей формы методом reset. */
const refs = {
  form: document.querySelector(".login-form"),
};
refs.form.addEventListener("submit", handleButtonClick);

function handleButtonClick(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  // console.log(formElements);

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };
  console.log(formData);

  if (mail === "" || password === "") {
    alert("Bсе поля должны быть заполнены!");
  }
  event.target.reset();
}

// function handleButtonClick(event) {
//   event.preventDefault();

//   if (event.currentTarget.value === "") {
//     alert("Bсе поля должны быть заполнены!");
//   }

//   // const formData = new FormData(event.currentTarget);
//   // formData.forEach((value, name) => {
//   //   console.log(`${name}: ${value}`);
//     // if (value === "") {
//     //   alert("Bсе поля должны быть заполнены!");
//     // }
//   // });

//   event.target.reset();
// }
