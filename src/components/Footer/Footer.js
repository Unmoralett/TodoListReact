import React, { Component } from "react";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      label: "",
    };
  }

  onLabelChange = (evt) => {
    this.setState({
      label: evt.target.value,
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form className="footer d-flex justify-content-center" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What need to be done"
          value={this.state.label}
        />
        <button className="btn btn-warning ms-3 text-nowrap">Add task</button>
      </form>
    );
  }
}
