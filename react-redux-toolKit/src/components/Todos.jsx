import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function deleteTodo(id) {
    dispatch(removeTodo(id));
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
            delte
          </button>
        </li>
      ))}
    </>
  );
}

export default Todos;
