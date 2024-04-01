import React, { useState } from "react";
import { TextField, Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TaskInput = () => {
  //variable to dispatch action to my store
  const dispatch = useDispatch();

  // State variable for the input field 
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      // Dispatching an Action with our new Todo Item
      dispatch(addTodo({ text: newTodoText.trim(), completed: false }));
      // Resetting the Input Field after adding a todo item
      setNewTodoText("");
    }
  };

  return (
    <div className="w-full h-full p-2 flex flex-col justify-around items-center">
      <div className="w-full flex">
        {/* MUI component for creating a simple textfield */}
        <TextField
          size="large"
          label="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
          className="grow"
        />
        {/* MUI component for creating a button */}
        <Button
          variant="contained"
          size="large"
          onClick={handleAddTodo}
          sx={{ marginLeft: '12px'}}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default TaskInput;
