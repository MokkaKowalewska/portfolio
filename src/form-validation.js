import { submitForm } from "./send-form";

export default class ValidateForm {
  constructor(form) {
    this.form = form;
    this.inputs = form.querySelectorAll("input");
    this.noValidate();
    this.realtimeValidation();
    this.displayErrors();
  }

  noValidate() {
    this.form.setAttribute("novalidate", true);
  }

  realtimeValidation() {
    this.inputs.forEach((input) => input.addEventListener(
      "input", (event) => {
				let testedInput = event.target;

				if(testedInput.validity.)




      }, false,
    ));
  }
}


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
