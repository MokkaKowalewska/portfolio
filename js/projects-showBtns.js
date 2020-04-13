let btns = document.querySelectorAll(".projects__btns"),
  imgs = document.querySelectorAll(".projects__img");

imgs.forEach.addEventListener(
  "mouseover",
  function (e) {
    btns[].classList.add("btnsSlide");
    e.stopPropagation;
  },
  true
);

function showBtns() {
    for( let i = 0; i < imgs.length ) {
        imgs[i].addEventListener("mouseover",
        function (e) {
            btns[i].classList.add("btnsSlide");
        })
    }
}

img.addEventListener(
  "mouseout",
  function (e) {
    btns.classList.remove("btnsSlide");
  },
  true
);
