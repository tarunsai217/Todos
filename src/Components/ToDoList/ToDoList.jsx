import React from "react";
import "./ToDoList.scss";
import { Bin } from "../../Assets/index";

function ToDoList({ todos, setTodos }) {
  const deleteHandler = (id) => {
    console.log("id", id);
    setTodos((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };
  return (
    <div className="todos-container">
      {todos.length === 0 ? (
        <span className="no-todos">NO TODOS, YAY</span>
      ) : (
        <ul className="todos">
          {todos.map((todo) => {
            return (
              <li className="todo">
                <span className="text">{todo.text}</span>{" "}
                <div
                  onClick={() => deleteHandler(todo.id)}
                  className="bin-icon-wrapper"
                >
                  <Bin />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;
