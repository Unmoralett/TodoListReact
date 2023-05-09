import React from "react";

import AppHeader from "../AppHeader";
import SubHeader from "../SubHeader";
import TodoList from "../TodoList";
import "./App.css";

const App = () => {
  const todoData = [
    { label: "Drink Cofee", important: false, id: 1 },
    { label: "Drink Tea", important: true, id: 2 },
    { label: "Drink Soke", important: false, id: 3 },
  ];

  return (
    <div className="container">
      <AppHeader />
      <SubHeader/>
      <TodoList todoData={todoData} />
    </div>
  );
};

export default App;
