function isVisible(section) {
  let sectionBox = section.getBoundingClientRect(),
    pxFromTop = -140;

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
      section.classList.add("js-aos-slideIn");
    } else {
      section.classList.add("js-aos-hidden");
    }
  });
}

document.addEventListener("scroll", throttle(showSection, 300), false);

function throttle(fn, wait) {
  let time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}
