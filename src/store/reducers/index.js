import { combineReducers } from "redux";
import factReducer from "./factReducer.js";
export default combineReducers({
  reducer: factReducer,
});