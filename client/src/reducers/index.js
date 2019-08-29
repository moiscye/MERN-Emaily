import { combineReducers } from "redux";
import { reducer as reduxReducer } from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxReducer,
  surveys: surveysReducer
});
