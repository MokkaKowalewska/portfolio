import throttle from "lodash/throttle";
import showSection from "./animate-on-scroll";
import scrollUp from "./scroll-up";
import ValidateForm from "./form-validation";
import getNav from "./mobile-nav";

getNav();

window.addEventListener(
  "scroll",
  throttle(() => {
    showSection();
    scrollUp();
  }, 300),
  false,
);

const form = document.querySelector(".contact__form");
const messages = {
  valueMissing: "Oh noes, this field cannot be empty!",
  typeMismatch: "It doesn't look like email address...",
  patternMismatch: "It doesn't look like email address...",
  tooShort: "Hey there, write at least 3 signs",
  check: "Check!",
};

new ValidateForm(form, ".validate", ".form__errorMsg", messages);
