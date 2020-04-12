let btns = document.querySelector(".projects__btns"),
  img = document.querySelector(".projects__img");

img.addEventListener(
  "mouseover",
  function (e) {
    btns.classList.add("btnsSlide");
  },
  false
);

img.addEventListener(
  "mouseout",
  function (e) {
    btns.classList.remove("btnsSlide");
  },
  false
);
