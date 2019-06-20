import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getFriends } from "../store/actions";
import Friend from "../components/Friend";
import FriendForm from "../components/FriendForm";

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div>
        <Cards>
          {this.props.friends.map(friend => (
            <Friend friend={friend} key={friend.id} />
          ))}
        </Cards>
        <FriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList);
