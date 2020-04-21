export function submitForm() {
  const status = document.querySelector(".form__status"),
    submitBtn = document.querySelector(".form__btn"),
    form = document.querySelector(".contact__form"),
    formWrapper = document.querySelector(".right-col"),
    name = document.getElementById("name"),
    email = document.getElementById("email"),
    message = document.getElementById("message");

  submitBtn.disabled = true;
  status.innerHTML = "sending...";

  const formdata = new FormData();
  formdata.append("name", name.value);
  formdata.append("email", email.value);
  formdata.append("message", message.value);

  const ajax = new XMLHttpRequest();

  ajax.open("POST", "contact-form.php", true);
  ajax.send(formdata);

  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      if (ajax.responseText == "success") {
        // status.innerHTML = ajax.responseText;
        formWrapper.innerHTML =
          "Thank You for Your message, " + name.value + "!";
      } else {
        status.innerHTML = ajax.responseText;
        submitBtn.disabled = false;
      }
    }
  };
}
