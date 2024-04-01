
import React from "react";
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/todoSlice'; 

const TodoItem = ({ todo, index }) => {
  // variable to dispatch  actions
  const dispatch = useDispatch();

  //function to handle toggle of completed status
  const handleToggleTodo = () => {
    dispatch(toggleTodo(index));
  };

  //function  to handle removal of the item
  const handleRemoveTodo = () => {
    dispatch(removeTodo(index));
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4">{index + 1}.</span>
        <span className={`mr-4 ${todo.completed ? 'line-through text-gray-600' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div className='space-x-3 ml-8'>
        <button onClick={handleRemoveTodo}>Remove</button>
        <input
          type="checkbox"
          onChange={handleToggleTodo}
          checked={todo.completed}
        />
      </div>
    </li>
  );
};

export default TodoItem;
