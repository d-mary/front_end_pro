const _inputPassword = document.querySelector(".js--input-password");
const _form = document.querySelector(".js--form");
const _btn = document.querySelector(".btn");

function createValidationMessages() {
  const errorMessages = {
    uppercase: "Пароль должен содержать хотя бы одну большую букву",
    number: "Пароль должен содержать хотя бы одну цифру",
    punctuation: "Пароль должен содержать хотя бы один знак пунктуации",
    length: "Пароль должен содержать не менее 8 символов",
  };

  const validationMessages = {};

  for (const key in errorMessages) {
    const message = document.createElement("small");
    message.className = "validation-message";
    message.textContent = errorMessages[key];
    _form.appendChild(message);
    validationMessages[key] = message;
    validationMessages[key].style.display = "block";
  }

  return validationMessages;
}
const validationMessages = createValidationMessages();
_form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearValidationMessages();
  validatePassword();
  clearInputField();
});

function validatePassword() {
  const password = _inputPassword.value;
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /\d/;
  const punctuationRegex = /[^\w\s]/;
  const lengthRegex = /.{8,}/;

  let isValid = true;

  if (!uppercaseRegex.test(password)) {
    showErrorMessage("uppercase");
    isValid = false;
  } else {
    hideErrorMessage("uppercase");
  }

  if (!numberRegex.test(password)) {
    showErrorMessage("number");
    isValid = false;
  } else {
    hideErrorMessage("number");
  }

  if (!punctuationRegex.test(password)) {
    showErrorMessage("punctuation");
    isValid = false;
  } else {
    hideErrorMessage("punctuation");
  }

  if (!lengthRegex.test(password)) {
    showErrorMessage("length");
    isValid = false;
  } else {
    hideErrorMessage("length");
  }

  return isValid;
}

function showErrorMessage(key) {
  validationMessages[key].style.display = "block";
}

function hideErrorMessage(key) {
  validationMessages[key].style.display = "none";
}

function clearValidationMessages() {
  for (const key in validationMessages) {
    hideErrorMessage(key);
  }
}

function clearInputField() {
  _inputPassword.value = "";
}
