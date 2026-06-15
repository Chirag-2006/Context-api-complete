import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/useTodos";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todoObj) {
    setTodos((prev) => [{ ...todoObj, id: Date.now() }, ...prev]);
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
        currTodo.id === id ? { isCompleted: !currTodo.isCompleted } : currTodo,
      ),
    );
  }


  // ********************************  Local Storage Functionlity ********************************
  useEffect(() => {
    function getTodoFromLocalStorage() {
      const todosFromLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosFromLocal);
    }

    getTodoFromLocalStorage();
  }, []);

  useEffect(() => {
    const setTokenToLocalStorage = () => {
      JSON.stringify(localStorage.setItem("todos", todos));
    };
    setTokenToLocalStorage();
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
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
