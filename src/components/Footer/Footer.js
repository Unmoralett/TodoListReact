import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer d-flex">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => this.props.onItemAdded('hello')}
        >
          Add Item
        </button>
      </div>
    );
  }
}
