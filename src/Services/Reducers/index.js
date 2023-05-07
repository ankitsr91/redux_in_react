//for making single reducer
import { combineReducers } from "redux";
import changeTheNumber from "./reducer";

//form combining all reducers
const rootReducer = combineReducers({
  changeTheNumber
});

export default rootReducer;