import { useState } from "react";
import "./AddToDo.scss";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

function AddToDo({ setTodos }) {
  const [input, setInput] = useState("");
  const addToDoHandler = () => {
    if (input) {
      setTodos((prev) => {
        return [...prev, { id: uuidv4(), text: input }];
      });
      setInput("");
    } else {
      toast.error("Please enter a todo ");
    }
  };
  return (
    <div className="add-todo">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Add a todo"
        type="text"
      />
      <button onClick={addToDoHandler}>Add Todo</button>
    </div>
  );
}

export default AddToDo;
