import {createStore, applyMiddleware, combineReducers} from "redux";
import promiseMiddleware from "redux-promise";
import recipeApp from "./reducers/reducer";

let createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
export default function configureStore(initialState={}) {
 return createStoreWithMiddleware(recipeApp, initialState);
}
