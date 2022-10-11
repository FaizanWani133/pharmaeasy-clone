import {legacy_createStore, combineReducers,applyMiddleware} from "redux"

import { AuthReducer } from "./Auth/reducer";
import thunk from "redux-thunk";

const rootReducer= combineReducers({
    auth: AuthReducer
});

export const store= legacy_createStore(rootReducer, applyMiddleware(thunk))