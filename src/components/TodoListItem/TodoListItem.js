import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false,
    };
  }

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let classNames = "todo-list-item-label d-flex justify-content-between";
    if (done) {
      classNames += " text-decoration-line-through";
    }

    if (important) {
      classNames += " fw-bold text-success";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item" onClick={this.onLabelClick}>
          {label}
        </span>

        <span>
          <button
            type="button"
            className="btn btn-outline-success m-2"
            onClick={this.onMarkImportant}
          >
            <i className="bi bi-exclamation-lg"></i>
          </button>
          <button type="button" className="btn btn-outline-danger">
            <i className="bi bi-trash3"></i>
          </button>
        </span>
      </span>
    );
  }
}
