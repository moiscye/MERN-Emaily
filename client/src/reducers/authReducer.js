import { FETCH_USER, LOGOUT_USER, LOGIN_USER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case LOGIN_USER:
      console.log("action.payload");
      return action.payload || false;

    case LOGOUT_USER:
      return false;
    default:
      return state;
  }
}
