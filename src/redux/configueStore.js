import { applyMiddleware, combineReducers, createStore } from "redux";
import user from "./features/user";
import films from "./features/films";
const { default: thunk } = require("redux-thunk");

const combineRouter = combineReducers({
  user,
  films,
});

const store = createStore(combineRouter, applyMiddleware(thunk));

export default store;
