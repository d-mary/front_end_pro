import Button from "../components/Button";
import { useState } from "react";
function Form({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = inputValue.trim();
    if (text === "") {
      return <div>Insert your todo item</div>;
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
      <Button type="submit" text="Add" />
    </form>
  );
}

export default Form;
