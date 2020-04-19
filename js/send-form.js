const submitBtn = document.querySelector(".contact__btn");
form = document.querySelector(".form");

function submitForm() {
  const status = document.querySelector(".contact__status"),
    name = document.getElementById("name");

  submitBtn.disabled = true;
  status.innerHTML = "sending...";

  console.log(name);

  let formdata = new FormData();
  formdata.append("name", name.value);
  formdata.append("email", document.getElementById("email").value);
  formdata.append("message", document.getElementById("message").value);

  console.log(document.querySelector("input #name").value);

  let ajax = new XMLHttpRequest();
  ajax.open("POST", "../contact-form.php");
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      if (ajax.responseText == "success") {
        form.innerHTML = "Thank You for You message," + name.value + "!";
      } else {
        status.innerHTML = ajax.responseText;
        submitBtn.disabled = false;
      }
    }
  };

  ajax.send(formdata);
}
