import React from "react";
import ReactDOM from "react-dom";

import TodoList from './components/TodoList'
import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'

const App = () => {
  return (
    <div>
      <span>{ (new Date()).toString() }</span>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
