import React, { Component } from "react";
import Form from "./ui/containers/Form";
import TodoItem from "./ui/components/TodoItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  generateId = () => {
    return Math.random();
  };

  handleAddTodo = (text) => {
    const { todos } = this.state;
    const newTodo = {
      id: this.generateId(),
      text: text,
    };
    const updatedTodos = [...todos, newTodo];
    this.setState({
      todos: updatedTodos,
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  handleDeleteTodo = (id) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    this.setState({ todos: updatedTodos });
  };

  handleEditTodo = (id) => {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  handleSaveEdit = (id, newText) => {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
        todo.isEditing = false;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  componentDidMount() {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    this.setState({ todos: savedTodos });
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <Form onAddTodo={this.handleAddTodo} />
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={this.handleDeleteTodo}
              handleEdit={this.handleEditTodo}
              handleSaveEdit={this.handleSaveEdit}
            />
          ))}
        
      </div>
    );
  }
}
export default App;
