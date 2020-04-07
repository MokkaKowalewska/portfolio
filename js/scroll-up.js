let scrollUp = document.getElementById("scroll-up");

// function animateScroll() {
//   if (document.documentElement.scrollTop > 0) {
//     window.scrollBy(0, -10);
//     setTimeout(animateScroll, 10);
//   }
// }

// //listen to events on button, then stop propagation and invoke animateScroll
// scrollUp.addEventListener(
//   "click",
//   function (e) {
//     animateScroll();
//   },
//   false
// );

//listen to events on window, if scrolled more than 100px (or 100vw?), remove class hidden
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
