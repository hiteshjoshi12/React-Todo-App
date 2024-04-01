import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [], searchTerm: '' };

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    //addtodo slice for adding the text
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    //toggle slice to toggle between completed status
    toggleTodo: (state, action) => {
      const todoIndex = action.payload;
      state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
    },
    //remove slice to remove the item from the store
    removeTodo: (state, action) => {
      const todoIndex = action.payload;
      state.todos.splice(todoIndex, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
