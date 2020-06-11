import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../css/style.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <form>
        <h1>React Webpack Setup</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        /> <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      /> <input
      type="text"
      value={this.state.value}
      onChange={this.handleChange}
    />
      </form>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;