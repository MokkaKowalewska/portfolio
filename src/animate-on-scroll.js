const sections = document.querySelectorAll(".js-aos-hidden");

function isVisible(section) {
  let sectionBox = section.getBoundingClientRect(),
    pxFromTop = -150;

  if (sectionBox.top - window.innerHeight < pxFromTop) {
    return true;
  } else {
    return false;
  }
}

function showSection() {
  sections.forEach((section) => {

    if (isVisible(section)) {
      section.classList.remove("js-aos-hidden");
      section.classList.add("js-aos-slideIn");
    }
  });
}


export { showSection };
