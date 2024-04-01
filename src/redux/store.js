// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; 

const store = configureStore({
  reducer: {
    todos: todoReducer, // Use the todoReducer as the value for the 'todos' slice in the Redux store
    
  },
});

export default store;
