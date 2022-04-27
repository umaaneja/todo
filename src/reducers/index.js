
import { combineReducers } from "redux";
import todos from "./todoReducer";

const rootReducer = combineReducers({ todos: todos});

export default rootReducer;

