import React from "react";

import SearchPanel from "../SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter";

const SubHeader = () => {
  return (
    <div className="d-flex justify-content-between m-3">
        <SearchPanel />
        <ItemStatusFilter/>
  </div>
  )
};

export default SubHeader;
