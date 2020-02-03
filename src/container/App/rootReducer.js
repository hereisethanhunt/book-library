import { combineReducers } from "redux";
import BookData from "../BookLibrary/bookReducer";

const AppReducer = combineReducers({
  BookData
});

export default AppReducer;
