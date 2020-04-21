require("./navigation.js");
require("./send-form.js");

import { showSection} from "./animate-on-scroll.js";
import { scrollUp } from "./scroll-up.js";
import _ from "lodash";

window.addEventListener(
  "scroll",
  () => {
    _.throttle(scrollUp, 500);
    _.throttle(showSection, 200);
  },
  false
);
