import { combineReducers } from "redux";
import steamReducer from "./steamReducer";

const reducers = combineReducers({
    steam: steamReducer,
})

export default reducers;