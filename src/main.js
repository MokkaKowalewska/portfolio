import throttle from "./throttle";
import showSection from "./animate-on-scroll";
import scrollUp from "./scroll-up";

require("./navigation.js");
require("./send-form.js");

window.addEventListener(
  "scroll",
  (e) => {
    throttle(scrollUp, 500);
    throttle(showSection, 200);
  },
  false,
);
