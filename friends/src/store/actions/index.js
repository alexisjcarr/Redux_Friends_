import axios from "axios";
import { axiosWithAuth } from "../../components/axiosWithAuth";

export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_PENDING });
  return axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: "You didn't login" });
    });
};

export const GET_FRIENDS_PENDING = "GET_FRIENDS_PENDING";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_PENDING });
  axiosWithAuth()
    .get("/api/friends")
    .then(res => {
      console.log(res);
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_FRIENDS_FAILURE });
    });
};
