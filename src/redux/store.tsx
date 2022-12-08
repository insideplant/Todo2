// import { configureStore } from '@reduxjs/toolkit'
import { Action } from "@remix-run/router";
import { createStore,combineReducers } from "redux";
import countReducer from "./countReducer";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
    countReducer,
    todosReducer,
});

const store = createStore(rootReducer);
console.log(store.getState());

export default store;