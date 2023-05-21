import React from "react";
import Button from "../components/Button";

export default class TodoItem extends React.Component {
  handleDeleteClick = () => {
    const { todo, handleDelete } = this.props;
    handleDelete(todo.id);
  };

  handleEditClick = () => {
    const { todo, handleEdit } = this.props;
    handleEdit(todo.id);
  };

  handleSaveClick = (event) => {
    event.preventDefault();
    const { todo, handleSaveEdit } = this.props;
    const newText = event.target.elements.editedText.value.trim();
    if (newText === "") {
      return alert("Please enter a valid text");
    }
    handleSaveEdit(todo.id, newText);
  };

  render() {
    const { todo } = this.props;
    return (
      <div>
        {todo.isEditing ? (
          <form onSubmit={this.handleSaveClick}>
            <input type="text" name="editedText" defaultValue={todo.text} />
            <Button type="submit" text="Сохранить" />
          </form>
        ) : (
          <div className="wrapper">
            {todo.text}
            <Button onClick={this.handleDeleteClick} text="Удалить" />
            <Button onClick={this.handleEditClick} text="Редактировать" />
          </div>
        )}
      </div>
    );
  }
}
