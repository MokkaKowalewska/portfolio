import _ from "lodash";
import showSection from "./animate-on-scroll";
import scrollUp from "./scroll-up";
import submitForm from "./send-form";

require("./navigation");
require("./send-form");

window.addEventListener(
  "scroll",
  _.throttle(() => {
    showSection();
    scrollUp();
  }, 300),
  false,
);
