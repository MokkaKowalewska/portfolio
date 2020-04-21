function scrollUp() {
  const arrows = document.getElementById("scroll-up");
  const pxScrolled = document.documentElement.scrollTop;

  if (pxScrolled > 100) {
    arrows.classList.remove("js-scroll-up-hidden");
  } else {
    arrows.classList.add("js-scroll-up-hidden");
  }
}

export default scrollUp;
