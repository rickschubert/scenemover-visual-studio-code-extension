import { combineReducers } from "redux";
import { reducer as UI } from "./UI";

export const rootReducer = combineReducers({
  UI,
});
