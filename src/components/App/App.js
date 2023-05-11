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
        { label: "Drink Cofee", id: 1 },
        { label: "Drink Tea", id: 2 },
        { label: "Drink Soke", id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(() => {
      const { todoData } = this.state;
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
    this.setState(() => {
      const { todoData } = this.state;
      const newItem = { label: text, id: this.maxId++ };
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  render() {
    return (
      <div className="container">
        <AppHeader />
        <SubHeader />
        <TodoList todoData={this.state.todoData} onDeleted={this.deleteItem} />
        <Footer onItemAdded={this.addItem} />
      </div>
    );
  }
}
