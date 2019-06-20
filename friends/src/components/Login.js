import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <input
          name="user"
          placeholder="username"
          value={this.state.user}
          onChange={this.handleChanges}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChanges}
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  {}
)(Login);
