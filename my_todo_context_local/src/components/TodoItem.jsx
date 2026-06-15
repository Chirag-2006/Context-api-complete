import { useState } from "react";
import useTodo from "../contexts/useTodos";

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const [newTodoText, setNewTodoText] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  function editTodo() {
    // setIsTodoEditable(true) // to make the input field editable and then on next click of edit button it will save the changes what if i don't write this line of code then the input field will not become editable and the user will not be able to edit the todo text
    updateTodo(todo.id, newTodoText);
    setIsTodoEditable(false);
  }

  function deleteTodoFn(id) {
    deleteTodo(id);
  }

  function toggleCompleted() {
    toggleTodo(todo.id);
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isCompleted}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.isCompleted ? "line-through" : ""}`}
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.isCompleted) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.isCompleted}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodoFn(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
