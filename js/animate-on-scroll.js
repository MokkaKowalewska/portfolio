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

// function () {
//   for (let i = 0; i < 3; i++) {
//     let timeout = (i + 1) * 5000;
//     console.log(timeout);
//     setTimeout(showBio, timeout);
//     showBio(i);
//   }
// }

//listen to scroll event every x miliseconds
function throttle(fn, wait) {
  let time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

document.addEventListener(
  "scroll",
  () => {
    throttle(showBio, 300);
    throttle(showSection, 300);
  },
  false
);

export { throttle };
