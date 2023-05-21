class FormElement {
  constructor(name, type, value) {
    this.name = name;
    this.type = type;
    this.value = value;
  }

  showName() {
    console.log(`Name: ${this.name}`);
  }

  getValue() {
    return this.value;
  }
}

class TextElement extends FormElement {
  constructor(name, placeholder) {
    super(name, "text", "");
    this.placeholder = placeholder;
  }

  createInput() {
    const input = document.createElement("input");
    input.setAttribute("type", this.type);
    input.setAttribute("name", this.name);
    input.setAttribute("placeholder", this.placeholder);
    return input;
  }
}

class CheckboxElement extends FormElement {
  constructor(name, checked) {
    super(name, "checkbox", "");
    this.checked = checked;
  }

  createInput() {
    const input = document.createElement("input");
    input.setAttribute("type", this.type);
    input.setAttribute("name", this.name);
    input.checked = this.checked;
    return input;
  }
}

class ButtonElement extends FormElement {
  constructor(name) {
    super(name, "button", "");
  }

  createButton() {
    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.setAttribute("name", this.name);
    button.textContent = this.name;
    return button;
  }
}

function createForm() {
  const form = document.createElement("form");

  return form;
}

function addInputToForm(form, input) {
  form.appendChild(input.createInput());
}

function addSubmitButtonToForm(form, button) {
  form.appendChild(button.createButton());
}

function handleFormSubmit(event, form) {
  event.preventDefault();

  const formData = new FormData(form);

  console.log("Form Data:");
  printFormDataValue(formData, "name", "Name");
  printFormDataValue(formData, "email", "Email");
  printFormDataCheckboxValue(formData, "subscribe", "Subscribe");
}

function printFormDataValue(formData, name, label) {
  const value = formData.get(name);
  console.log(`${label}: ${value ? value : "You don't insert your data"}`);
}

function printFormDataCheckboxValue(formData, name, label) {
  const value = formData.has(name) ? "on" : "off";
  console.log(`${label}: ${value}`);
}

const form = createForm();

const nameInput = new TextElement("name", "Enter your name");
const emailInput = new TextElement("email", "Enter your email");
const subscribeCheckbox = new CheckboxElement("subscribe", true);
const submitButton = new ButtonElement("Submit");

addInputToForm(form, nameInput);
addInputToForm(form, emailInput);
addInputToForm(form, subscribeCheckbox);
addSubmitButtonToForm(form, submitButton);

form.addEventListener("submit", (event) => handleFormSubmit(event, form));

document.body.appendChild(form);
