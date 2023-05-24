import React, { useState } from "react";
import Button from "../components/Button";


const TodoItem = ({ todo, handleDelete, handleEdit, handleSaveEdit }) => {
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
      return alert("Please enter a valid text");
    }
    handleSaveEdit(todo.id, newText);
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
          <Button type="submit" text="Сохранить" />
        </form>
      ) : (
        <div className="wrapper">
          {todo.text}
          <Button onClick={handleDeleteClick} text="Удалить" />
          <Button onClick={handleEditClick} text="Редактировать" />
        </div>
      )}
    </div>
  );
};

export default TodoItem;
