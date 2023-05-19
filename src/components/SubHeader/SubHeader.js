import React, { Component } from "react";

export default class SubHeader extends Component {
  render() {
    const { onFilter, onSearch, filter } = this.props;
    const buttons = [
      { name: "all", label: "All" },
      { name: "active", label: "Active" },
      { name: "done", label: "Done" },
    ].map(({ name, label }) => {
      const isActive = filter === label;
      return (
        <button
          type="button"
          className={`btn btn-outline-info ${isActive? 'active' : ''}`}
          onClick={(evt) => onFilter(evt.target.innerText)}
          key={name}
        >
          {label}
        </button>
      );
    });
    return (
      <div className="d-flex justify-content-between mt-3 mb-3">
        <input
          type="text"
          className="form-control btn-danger me-3"
          placeholder="search"
          onChange={(evt) => onSearch(evt.target.value)}
        ></input>

        <div className="btn-group" role="group" aria-label="Basic example">
          {buttons}
        </div>
      </div>
    );
  }
}
