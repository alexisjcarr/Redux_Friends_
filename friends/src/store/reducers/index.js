import * as actionType from "../actions";

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_PENDING:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };
    case actionType.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: "Login Failure"
      };
    default:
      return state;
  }
};
