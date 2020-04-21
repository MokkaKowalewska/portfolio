function scrollUp() {
  let arrows = document.getElementById("scroll-up");
  let pxScrolled = document.documentElement.scrollTop;

  if (pxScrolled > 100) {
    arrows.classList.remove("js-scroll-up-hidden");
  } else {
    arrows.classList.add("js-scroll-up-hidden");
  }
}

export { scrollUp };
