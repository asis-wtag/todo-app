import todoReducers from "./todoReducers";
import counterReducers from "./counterReducers";
import { combineReducers } from "redux"; 
import quoteReducers from "./quoteReducers";

const rootReducer = combineReducers({
    todoReducers,
    counterReducers,
    quoteReducers,
})

export default rootReducer