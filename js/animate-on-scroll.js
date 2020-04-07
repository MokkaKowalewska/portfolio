// create function isVisible

// create variable with getBoundingClientRect method
// set pxFromTop
// create if: rectangle top - window.innerHeight is less than pxFromTop
// return true else false

function isVisible(section) {
  let sectionBox = section.getBoundingClientRect(),
    pxFromTop = -150;

  if (sectionBox.top - window.innerHeight < pxFromTop) {
    return true;
  } else {
    return false;
  }
}

// create fn listener
// get elements by class hidden
// for each element from this array-like object check if isVisible and remove class hidden

function showSection() {
  let sections = document.querySelectorAll(".js-aos-hidden");
  sections.forEach(function (section) {
    if (isVisible(section)) {
      section.classList.remove("js-aos-hidden");
    } else {
      section.classList.add("js-aos-hidden");
    }
  });
}

document.addEventListener("scroll", showSection, false);
