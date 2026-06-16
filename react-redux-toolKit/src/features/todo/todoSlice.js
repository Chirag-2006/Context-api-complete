import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, todoText: "first todo" }],
};

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todoText: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((currTodo) => currTodo.id !== id);
    },
  },
  updateTodo: function (state, action) {
    const id = action.payload;
    const newTodoText = action.payload;

    state.todos = state.todos.map((currTodo) =>
      currTodo.id === id ? { ...currTodo, todoText: newTodoText } : currTodo,
    );
  },
});

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer