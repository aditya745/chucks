import { combineReducers } from "redux";
import factReducer from "./factReducer.js";
import { reducer as reducerForm } from "redux-form";
export default combineReducers({
  reducer: factReducer,
  form: reducerForm
});
