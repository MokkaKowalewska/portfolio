const form = document.querySelector(".contact__form");
const errorsDiv = document.querySelector(".form__errors");


function validate(e) {
  console.log("val");
  e.preventDefault();

  let errors = [];

  const regexs = {
    name: /.+/,
    email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: /.{3,}/,
  };

  function testFields(field, regex) {
    regex.test(field.value) ? field.classList.add("valid") : field.classList.add("invalid");
  }

  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => input.addEventListener(
    "keyup", (e) => {
      testFields(e.target, regexs[e.target.attributes.name.value]);
    },
  ));

  if (errors > 0) {
    errorsDiv.textContent = `Please correct: ${errors}`;
  } else {
    errorsDiv.textContent = "";
  }
}

export { form, validate };
