import throttle from "lodash/throttle";
import showSection from "./animate-on-scroll";
import scrollUp from "./scroll-up";
import submitForm from "./send-form";
import ValidateForm from "./form-validation";

require("./navigation");

window.addEventListener(
  "scroll",
  throttle(() => {
    showSection();
    scrollUp();
  }, 300),
  false,
);


const possibleVioletions = ["valueMissing", "patternMismatch", "tooShort"];
const form = document.querySelector(".contact__form");

new ValidateForm(form, ".validate", possibleVioletions);
