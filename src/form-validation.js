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
    this.displayErrors;
  }

  noValidate() {
    this.form.setAttribute("novalidate", true);
  }

  displayErrors(inputValidated, violetion) {
    inputValidated.nextElementSibling.textContent = "siemanko";
	 }


  realtimeValidation() {
    this.inputs.forEach((input) => {
      input.addEventListener(
        "blur", (event) => {
          let testedInput = event.target;
          console.log(testedInput);

          for (let key in testedInput.validity) {
            if(testedInput.validity === true)
          }
          if (testedInput.validity.valueMissing) {
            console.log(testedInput.validity);

            displayErrors(testedInput, violetion);
          }
        },
        false,
      );
    }, false);
  }
}


//
