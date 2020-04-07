let boxArr = document.querySelectorAll(".bio__grid-item");
let myPhoto = document.querySelector(".bio__grid-item--noPadding");
console.log(boxArr);

function colorBox() {
  for (let i = 0; i < boxArr.length; i++) {
    boxArr[i].style.background = "rgba(193, 47, 105, " + Math.random() + ")";
  }
}

// colorBox();

myPhoto.addEventListener("mouseover", colorBox, false);
