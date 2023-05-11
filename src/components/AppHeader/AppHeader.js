import React from "react";

const AppHeader = ({ toDo, done }) => {
  return (
    <div>
      <h1 className="d-flex justify-content-center">My Todo</h1>
      <span className="d-flex justify-content-center">
        {toDo} more to do, {done} done
      </span>
    </div>
  );
};

export default AppHeader;
