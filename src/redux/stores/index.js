import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { data } from "../../data";
import reducer, { state } from "../reducers/task-reducer";

const persistedState = { users: data }
const store = createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

// store.subscribe(()=>{})
export default store;