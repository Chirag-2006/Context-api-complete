import { useState } from "react";
import { TodoProvider } from "./contexts/todoContext";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
    console.log("add Todo Function ", todos);
  }

  function updateTodo(todo, id) {
    setTodos((prev) => {
      prev.map((currTodo) => {
        return currTodo.id === id ? { ...currTodo, todo: todo } : currTodo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((prev) => {
      prev.filter((currTodo) => {
        return currTodo.id !== id;
      });
    });
  }

  function toggleTodo(id) {
    setTodos((prev) => {
      prev.map((currTodo) => {
        currTodo.id === id
          ? { ...currTodo, isCompleted: !currTodo.isCompleted }
          : currTodo;
      });
    });
  }

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </TodoProvider>
  );
}

export default App;
