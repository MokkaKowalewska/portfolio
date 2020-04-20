let scrollUp = document.getElementById("scroll-up");

window.addEventListener(
  "scroll",
  function (e) {
    let pxScrolled = document.documentElement.scrollTop;

    if (pxScrolled > 100) {
      scrollUp.classList.remove("js-scroll-up-hidden");
    } else {
      scrollUp.classList.add("js-scroll-up-hidden");
    }
  },
  false
);
