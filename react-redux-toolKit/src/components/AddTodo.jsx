import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [todoText, setTodoText] = useState(" ");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addTodo(todoText));
    setTodoText(" ");
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
