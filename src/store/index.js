import { legacy_createStore, applyMiddleware } from "redux";
import { ThunkMiddleware } from "redux-thunk";

import rootReducer from "../reducers";

const store = legacy_createStore(rootReducer, {})

export default store;