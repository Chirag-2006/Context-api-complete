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
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={deleteTodo(todo.id)}>X</button>
        </li>
      ))}
    </>
  );
}

export default Todos;
