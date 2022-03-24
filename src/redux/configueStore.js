import { applyMiddleware, combineReducers, createStore } from "redux";
import user from "./features/user";
import films from "./features/films";
import busy from "./features/busy";
import seans from "./features/seans";
import hall from "./features/hall";
import news from "./features/news";
import { composeWithDevTools } from "@redux-devtools/extension";

const { default: thunk } = require("redux-thunk");

const combineRouter = combineReducers({
  user,
  films,
  busy,
  seans,
  hall,
  news,
});

const store = createStore(
  combineRouter,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
