// fn createButton: create element, add class "up", "hidden", append it to body, add text content, return button
(function () {
  // function showScrollUp() {
  let scrollUp = document.getElementById("scroll-up");

  //   scrollUp.classList.add("scroll-up", "hidden");
  //   document.body.appendChild(scrollUp);

  //   scrollUp.insertAdjacentHTML(
  //     "beforeend",
  //     `<path class="scroll-up__path" d="M0 32 L30 0 L60 32"></path>
  //   <path class="scroll-up__path" d="M0 52 L30 20 L60 52"></path>
  //   <path class="scroll-up__path" d="M0 72 L30 40 L60 72"></path>`
  //   );

  //   return scrollUp;
  // }

  // const scrollUp = createScrollUp();

  // fn animateScroll: use document.documentElement.scrollTop,
  // window.scrollBy and setTimeout to set scrolling if position Y is more than 0
  function animateScroll() {
    if (document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -10);
      setTimeout(animateScroll, 10);
    }
  }

  //listen to events on button, then stop propagation and invoke animateScroll
  scrollUp.addEventListener(
    "click",
    function (e) {
      animateScroll();
    },
    false
  );

  //listen to events on window, if scrolled more than 100px (or 100vw?), remove class hidden
  window.addEventListener(
    "scroll",
    function (e) {
      let pxScrolled = document.documentElement.scrollTop;

      if (pxScrolled > 100) {
        scrollUp.classList.remove("hidden");
      } else {
        scrollUp.classList.add("hidden");
      }
    },
    false
  );
})();

/* <svg class="scroll-up">
  <path class="up3" d="M0 32 L30 0 L60 32"></path>
  <path class="up2" d="M0 52 L30 20 L60 52"></path>
  <path class="up1" d="M0 72 L30 40 L60 72"></path>
</svg>; */
