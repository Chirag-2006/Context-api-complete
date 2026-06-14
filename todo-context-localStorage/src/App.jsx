import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/todoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prev) => [{ ...todo, id: Date.now() }, ...prev]);
    console.log("add Todo Function ", todos);
  }

  function updateTodo(todo, id) {
    setTodos((prev) =>
      prev.map((currTodo) =>
        currTodo.id === id ? { ...currTodo, todo: todo } : currTodo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((currTodo) => currTodo.id !== id));
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((currTodo) => {
        currTodo.id === id
          ? { ...currTodo, isCompleted: !currTodo.isCompleted }
          : currTodo;
      }),
    );
  }

  useEffect(() => {
    async function getTodoFromLocalStorage() {
      const todos = JSON.parse(localStorage.getItem("todos"));
      console.log("todos in get localsotrage", todos);
       setTodos(todos);
    }
    getTodoFromLocalStorage();
  }, []);

  useEffect(() => {
    function setTodoInLocalStorage() {
      const stringifyTodo = JSON.stringify(todos);
      localStorage.setItem("todos", stringifyTodo);
    }
    setTodoInLocalStorage();
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
            {todos?.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
