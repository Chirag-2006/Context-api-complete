import { createContext, useContext } from "react";

export const todoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "1st todo",
      isCompleted: false,
    },
  ],
  addTodo: function (todo) {},
  updateTodo: function (id, newTodo) {},
  deleteTodo: function (id) {},
  toggleTodo: function (id) {},
});

export const TodoProvider = todoContext.Provider;

export default function useTodo() {
  return useContext(todoContext);
}
