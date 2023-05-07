import {createStore} from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./Reducers/index";

//add all the reducers inside the container (store)
const store = createStore(rootReducer);

//store send to index.js files
export default store;