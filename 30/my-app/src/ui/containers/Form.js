import React from "react";
import Button from "../components/Button";

class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.elements.inputValue;
    const text = input.value.trim();
    if (text === "") {
      return alert("Insert your todo item");
    }
    this.props.onAddTodo(text);
    input.value = "";
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input type="text" name="inputValue" />
        <Button type="submit" text="Добавить" />
      </form>
    );
  }
}

export default Form;
