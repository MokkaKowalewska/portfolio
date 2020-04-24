import throttle from "lodash/throttle";
import showSection from "./animate-on-scroll";
import scrollUp from "./scroll-up";
import submitForm from "./send-form";
import { form, validate } from "./form-validation";

require("./navigation");

window.addEventListener(
  "scroll",
  throttle(() => {
    showSection();
    scrollUp();
  }, 300),
  false,
);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   validate(e);
// }, false);

validate();
