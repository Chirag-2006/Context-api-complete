import { useContext, createContext } from "react";

export const todoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "first todo",
      isCompleted: false,
    },
  ],
  addTodo: function (todo) {},
  updateTodo: function (todo, id) {},
  deleteTodo: function (id) {},
  toggleTodo: function (id) {},
});

export const TodoProvider = todoContext.Provider;

export default function useTodo() {
  return useContext(todoContext);
}
