import React, { Component } from "react";
import { Input } from "antd";
export default class ClassLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    console.log("I mounted!!  \u{1F3C7}");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("I updated!! \u{23EB}");
  }
  componentWillUnmount() {
    console.log("I unmounted! \u{1F4A9}");
  }

  render() {
    console.log("I rendered!");
    return (
      <div style={{ width: 300, margin: "auto" }}>
        <h1>Component Lifecycle Management (OLD)</h1>
        <form>
          <Input
            addonBefore="Username"
            type="username"
            name="username"
            value={this.state.username}
            placeholder="ManateeTaco"
            onChange={this.handleChange}
          />
          <br />
          <Input
            addonBefore="Password"
            type="password"
            name="password"
            autoComplete="off"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          />
        </form>
        <h2>Email:{this.state.username}</h2>
        <h2>Password:{this.state.password}</h2>
      </div>
    );
  }
}
