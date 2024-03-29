import H2 from "../components/H2";
import Form from "../containers/Form";
import TodoItem from "../components/TodoItem";
import React, { useState, useEffect } from "react";

function Main() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const generateId = () => {
    return Math.random();
  };

  const handleAddTodo = (text) => {
    const newTodo = {
      id: generateId(),
      text: text,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleEditTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleSaveEdit = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText, isEditing: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <main>
      <Form onAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDeleteTodo}
          handleEdit={handleEditTodo}
          handleSaveEdit={handleSaveEdit}
        />
      ))}
    </main>
  );
}
export default Main;
