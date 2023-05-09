import React from "react";

const ItemStatusFilter = () => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-outline-info active">
        All
      </button>
      <button type="button" className="btn btn-outline-info">
        Active
      </button>
      <button type="button" className="btn btn-outline-info">
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
