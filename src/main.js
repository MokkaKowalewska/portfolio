import { showSection, showBio } from "./animate-on-scroll.js";
require("./navigation.js");
import { scrollUp } from "./scroll-up.js";
require("./send-form.js");
// import { _ } from "lodash";

window.addEventListener(
  "scroll",
  () => {
    scrollUp();
    showSection();
    showBio();
  },
  false
);
