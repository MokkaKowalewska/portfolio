import { submitForm } from "./submit-form";

class ValidateForm {
  constructor(form, inputsClassName, errorMsgClassName, messages) {
    this.form = form;
    this.inputs = form.querySelectorAll(inputsClassName);
    this.errorMsgList = document.querySelectorAll(errorMsgClassName);
    this.messages = messages;
    this.noValidate();
    this.realtimeValidation();
    this.validateOnSubmit();
  }

  noValidate() {
    this.form.setAttribute("novalidate", true);
  }

  displayErrors(inputValidated, violetion) {
    const input = inputValidated;
    input.nextElementSibling.textContent = this.messages[violetion];
    input.setAttribute("aria-describedby", `error-for-${inputValidated.id}`);
  }

  inputsValidation(testedInput) {
    const { validity } = testedInput;

    for (const violetion in validity) {
      if (validity[violetion] === true && violetion !== "valid") {
        this.displayErrors(testedInput, violetion);
        testedInput.nextElementSibling.style.color = "#ff2424";
        return;
      }

      this.displayErrors(testedInput, "check");
      testedInput.nextElementSibling.style.color = "#5eb15e";
    }
  }

  realtimeValidation() {
    this.inputs.forEach((input) => {
      input.addEventListener(
        "change", (e) => {
          this.inputsValidation(e.target);
        },
        false,
      );
    });
  }

  validateOnSubmit() {
    this.form.addEventListener(
      "submit", (e) => {
        const inputsArr = Array.from(this.inputs);

        e.preventDefault();

        inputsArr.forEach(input => {
          this.inputsValidation(input);
        });

        if (inputsArr.every(input => input.checkValidity() === true)) {
          submitForm();
        }

      }, false,
    );
  }
}

export default ValidateForm;
