import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [newTodoText, setNewTodoText] = useState("");
  console.log(todos);

  function deleteTodo(id) {
    dispatch(removeTodo(id));
  }

  function updateTodoFromInput(id, newText) {
    // Implementation for updating a todo
    dispatch(updateTodo({ id, newText }));
    
  }

  return (
    <>
      {/* <div>Todos</div> */}
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.todoText}{" "}
          <button
            className="bg-red-500 text-white px-2 py-1 rounded text-3xl"
            onClick={() => deleteTodo(todo.id)}
          >
            delete
          </button>
          {/* ye sab input me ho rha hai muje ? muje chahiye ki jiski id hai ussi per edit hoye */}
          {editingId === todo.id && (
            <input
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
            />
          )}
          <button
            onClick={() => {
              setEditingId(todo.id);
              setNewTodoText(todo.todoText);
              updateTodoFromInput(todo.id, newTodoText);
            }}
          >
            Edit
          </button>
        </li>
      ))}
    </>
  );
}

export default Todos;
