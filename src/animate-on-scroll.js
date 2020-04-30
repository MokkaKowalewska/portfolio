const sections = document.querySelectorAll(".js-aos-hidden");

function isVisible(section) {
  const sectionBox = section.getBoundingClientRect();
  const pxFromTop = -150;

  if (sectionBox.top - window.innerHeight < pxFromTop) {
    return true;
  }
  return false;
}

function showSection() {
  sections.forEach((section) => {
    if (isVisible(section)) {
      section.classList.remove("js-aos-hidden");
      section.classList.add("js-aos-slideIn");
    } else {
      section.classList.add("js-aos-hidden");
    }
  });
}

export default showSection;
