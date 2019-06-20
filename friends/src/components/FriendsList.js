import React, { Component } from "react";
import { connect } from "react-redux";

import { getFriends } from "../store/actions";
import Friend from "../components/Friend";
import FriendForm from "../components/FriendForm";

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div>
        {this.props.friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}
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
