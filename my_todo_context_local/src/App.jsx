import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/useTodos";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todoObj) {
    setTodos((prev) => [{ ...todoObj }, ...prev]);
  }

  function updateTodo(id, newTodo) {
    setTodos((prev) =>
      prev.map((currTodo) =>
        currTodo.id === id ? { todo: newTodo } : currTodo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((currTodo) => currTodo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((currTodo) =>
        currTodo.id === id ? { ...currTodo, isCompleted: !currTodo.isCompleted } : currTodo,
      ),
    );
  }

  // ********************************  Local Storage Functionlity ********************************
  useEffect(() => {
    function getTodoFromLocalStorage() {
      const todosFromLocal = JSON.parse(localStorage.getItem("todos"));
      console.log("todos in localstorage", todosFromLocal);
      if (todosFromLocal && todosFromLocal.length > 0) {
        setTodos(todosFromLocal);
      }
    }

    getTodoFromLocalStorage();
  }, []);

  useEffect(() => {
    // function setTodoToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
    // }
    // setTodoToLocalStorage();
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((currTodo) => (
              <div key={currTodo.id} className="w-full">
                <TodoItem todo={currTodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
