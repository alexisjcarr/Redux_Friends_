import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import { saveFriend } from "../store/actions";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input[type="text"] {
    height: 40px;
    border-radius: 12px;
    width: 50%;
    background-color: alice-blue;
  }
  button {
    height: 40px;
    border-radius: 12px;
  }
`;

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChanges = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = e => {
    this.props.saveFriend(this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.addFriend}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.friend.name}
          onChange={this.handleChanges}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={this.state.friend.age}
          onChange={this.handleChanges}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={this.state.friend.email}
          onChange={this.handleChanges}
        />
        <button type="submit">
          {this.props.savingFriends ? (
            <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
          ) : (
            "Save Friend"
          )}
        </button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    savingFriends: state.savingFriends
  };
};

export default connect(
  mapStateToProps,
  { saveFriend }
)(FriendForm);
