import { submitForm } from "./send-form";

const form = document.querySelector(".contact__form");


function validate(e) {
  const submitBtn = document.querySelector(".form__btn");
  console.log("val");

  form.setAttribute("novalidate", true);

    .submitBtn.disabled = true;

  let errors = [];

  const regexs = {
    name: /.+/,
    email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: /.{3,}/,
  };

  function testFields(field, regex) {
    if (regex.test(field.value)) {
      field.classList.add("form__input--valid");
    } else {
      field.classList.add("form__input--invalid");
      errors.push(field.name);
    }
    console.log(errors);
  }

  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => input.addEventListener(
    "keyup", (event) => {
      testFields(event.target, regexs[event.target.attributes.name.value]);
    },
  ));

  const errorsDiv = document.querySelector(".form__errors");

  if (errors === 0) {
    submitForm();
  }
}


export { form, validate };
