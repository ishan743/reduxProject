// import { configureStore } from "@reduxjs/toolkit";
import {createStore} from "redux";
import rootReducer from "./reducers/index";
// const store=configureStore(rootReducer);
const store=createStore(rootReducer);
export default store;