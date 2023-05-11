import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      done,
      important,
    } = this.props;
    let classNames = "todo-list-item-label d-flex justify-content-between";
    if (done) {
      classNames += " text-decoration-line-through";
    }

    if (important) {
      classNames += " fw-bold text-success";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item" onClick={onToggleDone}>
          {label}
        </span>

        <span>
          <button
            type="button"
            className="btn btn-outline-success m-2"
            onClick={onToggleImportant}
          >
            <i className="bi bi-exclamation-lg"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={onDeleted}
          >
            <i className="bi bi-trash3"></i>
          </button>
        </span>
      </span>
    );
  }
}
