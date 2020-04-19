function submitForm() {
  const status = document.querySelector(".contact__status"),
    submitBtn = document.querySelector(".contact__btn"),
    name = document.getElementById("name");

  submitBtn.disabled = true;
  status.innerHTML = "sending...";

  var formdata = new FormData();
  formdata.append("name", name.value);
  formdata.append("email", document.getElementById("email").value);
  formdata.append("message", document.getElementById("message").value);

  var ajax = new XMLHttpRequest();

  ajax.open("POST", "contact-form.php", true);
  console.log("nanana" + ajax);
  ajax.send(formdata);

  ajax.onreadystatechange = function () {
    console.log(ajax);
    if (ajax.readyState == 4 && ajax.status == 200) {
      if (ajax.responseText == "success") {
        status.innerHTML = ajax.responseText;
      } else {
        status.innerHTML = ajax.responseText;
        submitBtn.disabled = false;
      }
    }
  };
}
