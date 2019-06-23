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
        error: action.payload
      };
    case actionType.GET_FRIENDS_PENDING:
      return {
        ...state,
        fetchingFriends: true,
        error: ""
      };
    case actionType.GET_FRIENDS_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        error: "",
        friends: action.payload
      };
    case actionType.SAVE_FRIEND_PENDING:
      return {
        ...state,
        error: "",
        savingFriends: false
      };
    case actionType.SAVE_FRIEND_SUCCESS:
      return {
        ...state,
        error: "",
        savingFriends: true
      };
    case actionType.SAVE_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload,
        savingFriends: false
      };
    default:
      return state;
  }
};
