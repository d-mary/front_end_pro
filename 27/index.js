class FormElement {
  constructor(name, type, value) {
    this.name = name;
    this.type = type;
    this.value = value;
  }

  createInput() {
    const input = document.createElement("input");
    input.setAttribute("type", this.type);
    input.setAttribute("name", this.name);
    return input;
  }
}

class TextElement extends FormElement {
  constructor(name, placeholder) {
    super(name, "text", "");
    this.placeholder = placeholder;
  }

  createInput() {
    const input = super.createInput();
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
    const container = document.createElement("div");
    const input = super.createInput();
    input.checked = this.checked;
    const label = document.createElement("label");
    label.textContent = "Agree to our rules";
    label.appendChild(input);
    container.appendChild(label);
    return container;
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

class Form {
  constructor() {
    this.form = document.createElement("form");
    this.addInput(new TextElement("name", "Enter your name"));
    this.addInput(new TextElement("email", "Enter your email"));
    this.addInput(new CheckboxElement("subscribe", true));
    this.addSubmitButton(new ButtonElement("Submit"));
    this.attachFormSubmitHandler();
  }

  addInput(input) {
    this.form.appendChild(input.createInput());
  }

  addSubmitButton(button) {
    this.form.appendChild(button.createButton());
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this.form);

    this.printFormDataValue(formData, "name", "Name");
    this.printFormDataValue(formData, "email", "Email");
    this.printFormDataCheckboxValue(formData, "subscribe", "Subscribe");
  }

  printFormDataValue(formData, name, label) {
    const value = formData.get(name);
    console.log(`${label}: ${value || "You didn't insert your data"}`);
  }

  printFormDataCheckboxValue(formData, name, label) {
    const value = formData.has(name) ? "on" : "off";
    console.log(`${label}: ${value}`);
  }

  attachFormSubmitHandler() {
    this.form.addEventListener("submit", (event) =>
      this.handleFormSubmit(event)
    );
  }

  renderForm() {
    document.body.appendChild(this.form);
  }
}

const form = new Form();
form.renderForm();
