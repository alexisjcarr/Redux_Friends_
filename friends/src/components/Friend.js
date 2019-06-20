import React from "react";

const Friend = props => {
  return (
    <div>
      <h1>{props.friend.name}</h1>
      <p>age: {props.friend.age}</p>
      <p>email: {props.friend.email}</p>
    </div>
  );
};

export default Friend;
