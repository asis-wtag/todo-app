import todoReducers from "./todoReducers";
import counterReducers from "./counterReducers";
import { combineReducers } from "redux"; 

const rootReducer = combineReducers({
    todoReducers,
    counterReducers
})

export default rootReducer