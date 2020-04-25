// import { submitForm } from "./send-form";

export default class ValidateForm {
  constructor(form, inputsClassName, ...possibleVioletions) {
    this.form = form;
    this.inputs = form.querySelectorAll(inputsClassName);
    this.possibleVioletions = possibleVioletions;
    this.messages = {
      valueMissing: "Yikes, this field cannot be empty!",
      patternMismatch: "Enter valid email, pretty please",
      tooShort: "Please write at least 3 signs, 'Hey' will do! :)",
      check: "Check!",
    };
    this.noValidate();
    this.realtimeValidation();
    this.displayErrors;
  }

  noValidate() {
    this.form.setAttribute("novalidate", true);
  }

  displayErrors(inputValidated, violetion) {
    inputValidated.nextElementSibling.textContent = this.messages[violetion];
    inputValidated.setAttribute("aria-describedby", `error-for-${inputValidated.id}`);
	 }


  realtimeValidation() {
    this.inputs.forEach((input) => {
      input.addEventListener(
        "blur", (event) => {
          let testedInput = event.target;
          let { validity } = testedInput;

          // eslint-disable-next-line no-restricted-syntax
          for (let violetion in validity) {
            if (validity[violetion] === true && violetion !== "valid") {
              console.log(`${validity[violetion]}is validity violetion`);
              console.log(`${violetion}is violetion`);
              console.log(typeof violetion);
              this.displayErrors(testedInput, violetion);
            } else {
              this.displayErrors(testedInput, check);
              console.log("cheeck");
            }
          }
        },
        false,
      );
    }, false);
  }
}


//
