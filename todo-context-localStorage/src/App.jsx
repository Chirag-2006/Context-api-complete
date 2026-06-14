import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/todoContext";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prev) => {
      [{ ...todo, id: Date.now() }, ...prev];
    });
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

  useEffect(() => {
    async function getTodoFromLocalStorage() {
      const todos = await JSON.parse(localStorage.getItem("todos"));
      await setTodos(todos);
    }
    getTodoFromLocalStorage();
  }, []);

  useEffect(() => {
    async function setTodoInLocalStorage() {
      const stringifyTodo = JSON.stringify(
        localStorage.setItem("todos", todos),
      );
      localStorage.setItem("todos", stringifyTodo);
    }
    setTodoInLocalStorage();
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </TodoProvider>
  );
}

export default App;
