function getNav() {
  const nav = document.querySelector(".menu__ul"),
    burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  nav.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

export default getNav;
