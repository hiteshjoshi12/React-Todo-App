import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TaskList = () => {
  //subscribing to our redux store using the useSelector hook.
  const todos = useSelector((store) => store.todos.todos);
  return (
    <ul>
      {todos.map((todo, index) => (
        // Component is passed an individual todo item and its index for rendering purposes.
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TaskList;
