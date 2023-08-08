import Button from "../components/Button";
import React, { useState } from "react";
function TodoItem({ todo, handleDelete, handleSave, handleEdit }) {
  const [editedText, setEditedText] = useState(todo.text);

  const handleDeleteClick = () => {
    handleDelete(todo.id);
  };
  const handleEditClick = () => {
    handleEdit(todo.id);
  };

  const handleSaveClick = (event) => {
    event.preventDefault();
    const newText = editedText.trim();
    if (newText === "") {
      return <div>Please enter valid text</div>;
    }
    handleSave(todo.id, newText);
  };
  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };
  return (
    <div>
      {todo.isEditing ? (
        <form onSubmit={handleSaveClick}>
          <input
            type="text"
            name="editedText"
            value={editedText}
            onChange={handleInputChange}
          />
          <Button type="submit" text="Save" />
        </form>
      ) : (
        <div className="wrapper">
          {todo.text}
          <Button onClick={handleDeleteClick} text="Delete" />
          <Button onClick={handleEditClick} text="Edit" />
        </div>
      )}
    </div>
  );
}
export default TodoItem;
