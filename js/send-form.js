const submitBtn = document.querySelector(".contact__btn");

function submitForm() {
  const form = document.querySelector(".form"),

    status = document.querySelector(".contact__waitMsg"),
    name = document.getElementById("name");

  submitBtn.disabled = true;
  status.textContent = "sending...";

  console.log(name);

  let formdata = new FormData();
  formdata.append("name", name.value);
  formdata.append("email", document.getElementById("email").value);
  formdata.append("message", document.getElementById("message").value);

  console.log(document.querySelector("input #name").value);

  let ajax = new XMLHttpRequest();
  ajax.open("POST", "contact-form.php");
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      if (ajax.responseText == "success") {
        form.textContent(
          "Thank You for You message," +
            document.querySelector("input #name").value +
            "!"
        );
      } else {
        status.textContent = ajax.responseText;
        submitBtn.disabled = false;
      }
    }
  };

  ajax.send(formdata);
}

submitBtn.addEventListener(submitForm);
