import axios from "axios";

export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_PENDING });
  axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(error);
    });
};
