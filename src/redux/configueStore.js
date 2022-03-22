import { applyMiddleware, combineReducers, createStore } from "redux";
import user from "./features/user";
import films from "./features/films";
import busy from "./features/busy";
const { default: thunk } = require("redux-thunk");

const combineRouter = combineReducers({
  user,
  films,
  busy,
});

const store = createStore(combineRouter, applyMiddleware(thunk));

export default store;
