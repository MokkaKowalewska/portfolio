// import { submitForm } from "./send-form";

export default class ValidateForm {
  constructor(form, ...possibleVioletions) {
    this.form = form;
    this.inputs = form.querySelectorAll("input");
    this.possibleVioletions = possibleVioletions;
    this.messages = {
      valueMissing: "Yikes, his field cannot be empty",
      patternMismatch: "Enter valid email, pretty please",
      tooShort: "Please write at least 3 signs, 'Hey' will do! :)",
    };
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

        this.possibleVioletions.forEach((violetion) => {
          if (testedInput.ValidityState.violetion) {
            displayErrors(testedInput, violetion);
            console.log("validity state contains violetion");
          }
        });
      }, false,
    ));
	}

	displayErrors(testedInput, violetion) {
		this.messages.forEach(violetion) {
			 let text = testedInput.nextElementSibling.textContent;

			 text += message[key];
		 }
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
