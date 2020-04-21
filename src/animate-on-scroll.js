function isVisible(section) {
  let sectionBox = section.getBoundingClientRect(),
    pxFromTop = -50;

  if (sectionBox.top - window.innerHeight < pxFromTop) {
    return true;
  } else {
    return false;
  }
}

function showSection() {
  let sections = document.querySelectorAll(".js-aos-hidden");
  sections.forEach(function (section) {
    if (isVisible(section)) {
      section.classList.remove("js-aos-hidden");
      section.classList.add("js-aos-slideDown");
    } else {
      section.classList.add("js-aos-hidden");
    }
  });
}

function showBio() {
  let bioItems = document.querySelectorAll(".js-aos-hidden-bio");

  bioItems.forEach(function (bioItem) {
    if (isVisible(bioItem)) {
      bioItem.classList.remove("js-aos-hidden-bio");
      bioItem.classList.add("js-aos-slideDown");
    } else {
      bioItem.classList.add("js-aos-hidden-bio");
    }
  });
}

export { showSection, showBio };
