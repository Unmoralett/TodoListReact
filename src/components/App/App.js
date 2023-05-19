import React, { Component } from "react";

import AppHeader from "../AppHeader";
import SubHeader from "../SubHeader";
import TodoList from "../TodoList";
import Footer from "../Footer";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.maxId = 100;
    this.state = {
      todoData: [
        this.createTodoItem("Drink Cofee"),
        this.createTodoItem("Have a lunch"),
        this.createTodoItem("Learn React"),
      ],
      visible: "",
      filter: "",
    };
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1),
      ];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);

    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  onFilterDone = () => {
    const { todoData } = this.state;
    const filterData = todoData.filter((el) => el.done);
    this.setState(() => {
      return {
        todoData: filterData,
      };
    });
  };

  setStateFilter = (value) => {
    this.setState((state) => {
      return {
        ...state,
        filter: value,
      };
    });
  };

  filterData = (items, value) => {
    switch (value) {
      case "Active":
        return items.filter((item) => !item.done);
      case "Done":
        return items.filter((item) => item.done);

      default:
        return items;
    }
  };

  setStateSearch = (text) => {
    this.setState((state) => {
      return {
        ...state,
        visible: text,
      };
    });
  };

  search = (items, visible) => {
    if (visible === 0) {
      return items;
    } else {
      return items.filter((item) => {
        return item.label.toLowerCase().indexOf(visible.toLowerCase()) > -1;
      });
    }
  };

  render() {
    const { todoData, visible, filter } = this.state;
    const visibleItems = this.filterData(
      this.search(todoData, visible),
      filter
    );

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="container">
        <AppHeader toDo={todoCount} done={doneCount} />
        <SubHeader
          onFilter={this.setStateFilter}
          onSearch={this.setStateSearch}
          filter={filter}
        />
        <TodoList
          todoData={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <Footer onItemAdded={this.addItem} />
      </div>
    );
  }
}
