
const form = document.querySelector(".contact__form");

function submitForm(e) {
  const status = document.querySelector(".form__status");
  const submitBtn = document.querySelector(".form__btn");
  const formWrapper = document.querySelector(".right-col");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");


  status.innerHTML = "sending...";

  const formdata = new FormData();
  formdata.append("name", name.value);
  formdata.append("email", email.value);
  formdata.append("message", message.value);

  const ajax = new XMLHttpRequest();

  ajax.open("POST", "contact-form.php", true);
  ajax.send(formdata);

  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status === 200) {
      if (ajax.responseText === "success") {
        status.innerHTML = ajax.responseText;
        formWrapper.innerHTML = `Thank You for Your message, ${name.value}!`;
      } else {
        status.innerHTML = ajax.responseText;
        submitBtn.disabled = false;
      }
    }
  };
}


export { submitForm };
