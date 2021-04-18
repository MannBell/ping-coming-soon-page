const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (e) => handleSubmitButton(e))

const handleSubmitButton = (e) => {
  e.preventDefault();

  const emailValue = document.getElementById("emailInput").value;

  const emailWrapperClasses = document.getElementsByClassName("email-wrapper")[0].classList;
  const emptyExist = Array.prototype.includes.call(emailWrapperClasses, "empty");
  const invalidExist = Array.prototype.includes.call(emailWrapperClasses, "invalid");
  

  if (!emailValue) {
    if (invalidExist) {
      emailWrapperClasses.toggle("invalid");
    }
    if (!emptyExist) {
      emailWrapperClasses.toggle("empty");
    }
  }
  else {
    if (emptyExist) {
      emailWrapperClasses.toggle("empty");
    }

    const emailRegex = /^[\w_\-.]+@\w+\.\w+$/;
    const emailIsValid = emailRegex.test(emailValue);

    if (!emailIsValid) {
      if (!invalidExist) {
      emailWrapperClasses.toggle("invalid");
      }
    }
    else {
      if (invalidExist) {
      emailWrapperClasses.toggle("invalid");
      }
    }
  }
}