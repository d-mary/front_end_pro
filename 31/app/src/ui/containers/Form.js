import React, { useState } from "react";
import Button from "../components/Button";

const Form = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = inputValue.trim();
    if (text === "") {
      return alert("Insert your todo item");
    }
    onAddTodo(text);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="inputValue"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button type="submit" text="Добавить" />
    </form>
  );
};

export default Form;
