import { submitForm } from "./send-form";

const form = document.querySelector(".contact__form");


class ValidateForm {
	constructor(form, submitBtn) {
		this.form = form;
		this.submitBtn = submitBtn;
		this.inputs = form.inputs


	}




  const submitBtn = document.querySelector(".form__btn");
  console.log("val");

  form.setAttribute("novalidate", true);
  console.log(form.attributes);

  submitBtn.disabled = true;

  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => input.addEventListener(
    "input", (event) => {
      const isValid = event.target.validity;
			console.log(isValid);

			if(isValid)

    },
  ));

  //   function testFields(field, regex) {
  //     if (regex.test(field.value)) {
  //       field.classList.add("form__input--valid");
  //     } else {
  //       field.classList.add("form__input--invalid");
  //       errors.push(field.name);
  //     }
  //     console.log(errors);
  //   }


  //


  const errorsDiv = document.querySelector(".form__errors");
}


export { form, validate };
