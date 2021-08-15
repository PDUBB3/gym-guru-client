import React from "react";

import "./Filter.css";

const Filter = ({ filterStatus }) => {
  return (
    <div className={`filter ${filterStatus ? "active-filter" : ""}`}>
      <h2>Filter</h2>
      <div className="filterOptions">
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default Filter;
