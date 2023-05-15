const CLASS_DELETE_BUTTON = "deleteButton";
const SELECTOR_TODO_ELEMENT = "todoElement";
const button = document.querySelector(".form__btn");
const input = document.querySelector(".js--form__input");
const ul = document.querySelector(".js--todo_list");

button.addEventListener("click", onButtonClick);
ul.addEventListener("click", onListClick);

function TodoForm(formInput, todosList) {
  this._todosList = document.querySelector(todosList);
  this._formInput = document.querySelector(formInput);

  this.addTodoItem = (event) => {
    event.preventDefault();
    const inputValue = this.getInputData();
    if (!this.isValid(inputValue)) {
      this.showError();
      return;
    }
    this.renderInputValue(inputValue);
    this.clearInput();
  };

  this.getInputData = () => {
    return this._formInput.value.trim();
  };

  this.isValid = (inputValue) => {
    return inputValue !== "";
  };

  this.renderInputValue = (inputValue) => {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add(CLASS_DELETE_BUTTON);
    li.classList.add(SELECTOR_TODO_ELEMENT);
    li.textContent = inputValue;
    li.appendChild(deleteButton);
    this._todosList.appendChild(li);
  };

  this.showError = () => {
    alert("Please fill out the field");
  };

  this.clearInput = () => {
    this._formInput.value = "";
  };
}

function onButtonClick(event) {
  todoForm.addTodoItem(event);
}

function onListClick(event) {
  const target = event.target;
  if (target.classList.contains(CLASS_DELETE_BUTTON)) {
    deleteListElement(target);
  } else {
    makeTodoItemChecked(target);
  }
}

function deleteListElement(target) {
  const todoElement = target.closest(`.${SELECTOR_TODO_ELEMENT}`);
  todoElement.remove();
}

function makeTodoItemChecked(target) {
  target.classList.toggle("todoItemChecked");
}

const todoForm = new TodoForm(".js--form__input", ".js--todo_list");
