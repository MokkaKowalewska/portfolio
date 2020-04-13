let btns = document.querySelectorAll(".projects__btns"),
  imgs = document.querySelectorAll(".projects__img");

imgs.addEventListener(
  "mouseover",
  function (e) {
    btns.classList.add("showBtns");
  },
  true
);

img.addEventListener(
  "mouseout",
  function (e) {
    btns.classList.remove("showBtns");
  },
  true
);
