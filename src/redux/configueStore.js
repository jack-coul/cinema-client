import { applyMiddleware, combineReducers, createStore } from "redux";
import user from "./features/user";
const { default: thunk } = require("redux-thunk");

const combineRouter = combineReducers({
    user
})

const store = createStore(combineRouter, applyMiddleware(thunk))

export default store