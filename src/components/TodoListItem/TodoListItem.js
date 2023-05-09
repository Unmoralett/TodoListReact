import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "green" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <span className="todo-list-item-label d-flex justify-content-between">

      <span className="todo-list-item" style={style}>
        {label}
      </span>

      <span>
        <button type="button" className="btn btn-outline-success m-2">
          <i className="bi bi-exclamation-lg"></i>
        </button>
        <button type="button" className="btn btn-outline-danger">
          <i className="bi bi-trash3"></i>
        </button>
      </span>
      
    </span>
  );
};

export default TodoListItem;
