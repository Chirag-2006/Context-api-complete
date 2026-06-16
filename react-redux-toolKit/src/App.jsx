import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">React Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
