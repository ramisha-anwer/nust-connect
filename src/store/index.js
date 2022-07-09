import { legacy_createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";

import rootReducer from "../reducers";

const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export default store;