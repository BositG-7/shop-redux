import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk"; // Redux Thunk middleware

import shopReducer from "./shopreducer";

const store = createStore(
  shopReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)) // Middleware qo'shish
);

export default store;
