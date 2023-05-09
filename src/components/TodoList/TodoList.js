import React from "react";

import TodoListItem from "../TodoListItem";
import "./TodoList.css";

const TodoList = ({ todoData }) => {
  const element = todoData.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} />
      </li>
    );
  });
  return (
    <ul className="list-group todo-list">
      {element}
    </ul>
  )
};

export default TodoList;
