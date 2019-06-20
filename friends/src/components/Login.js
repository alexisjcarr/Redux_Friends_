import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { login } from "../store/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  loginHandler = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
    return (
      <form onSubmit={this.loginHandler}>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={this.state.credentials.username}
          onChange={this.handleChanges}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={this.state.credentials.password}
          onChange={this.handleChanges}
        />
        <button type="submit">
          {this.props.loggingIn ? (
            <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
          ) : (
            "Log in"
          )}
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn
  };
};
export default connect(
  mapStateToProps,
  { login }
)(Login);
