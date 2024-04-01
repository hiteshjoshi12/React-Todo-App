import React from "react";
import TaskInput from "./TakeInput";
import TaskList from "./TaskList";

// Main component to render the TodoApp
const TodoApp = () => {
  return (
    <div className='h-full w-full max-w-4xl mx-auto flex flex-col items-center'>
        <div className="bg-slate-200 w-full basis-1/12 p-4 flex justify-center items-center text-xl rounded-lg text-slate-600">
             TODO APP
        </div>
        <div className="basis-3/12 w-full">
          {/* component to take itmput with a input  field and add button */}
            <TaskInput />
        </div>
        <div className="basis-8/12 w-full">
            <TaskList />
        </div>
    </div>
  );
};

export default TodoApp;
