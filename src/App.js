import { useState } from "react";
import "./App.scss";
import AddToDo from './Components/AddToDo';
import ToDoList from './Components/ToDoList';
import { Moon, Sun } from "./Assets";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkmode, setDarkMode] = useState(false);
  const [todos,setTodos]=useState([]);
  return (
    <div className={darkmode ? "dark app" : "light app"}>
      <div className="top">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="toggle-button"
        >
          {" "}
          {darkmode ? <Moon /> : <Sun />}{" "}
        </button>
      </div>
      <h1 className="heading">Todo Application</h1>
      <ToDoList setTodos={setTodos} todos={todos}/>
      <AddToDo setTodos={setTodos}/>
      <ToastContainer position="bottom-center"/>
    </div>
  );
}

export default App;
