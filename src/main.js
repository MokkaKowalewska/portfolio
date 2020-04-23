import throttle from "lodash";
import showSection from "./animate-on-scroll";
import scrollUp from "./scroll-up";

require("./navigation.js");
require("./send-form.js");

window.addEventListener(
  "scroll",
  throttle(() => {
    showSection();
    scrollUp();
  }, 300),
  false,
);
