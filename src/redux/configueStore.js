import { applyMiddleware, combineReducers, createStore } from "redux";
import user from "./features/user";
import films from "./features/films";
import busy from "./features/busy";
import seans from "./features/seans";
import hall from "./features/hall";
const { default: thunk } = require("redux-thunk");

const combineRouter = combineReducers({
  user,
  films,
  busy,
  seans,
  hall
});

const store = createStore(combineRouter, applyMiddleware(thunk));

export default store;
