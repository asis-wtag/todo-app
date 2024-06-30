import { FETCH_QUOTE_START, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAILURE } from "../actions/quote/action_types";
import counterReducers from "./counterReducers";

const initialState = {
    quote: '',
    loading: false,
    error: null,
}

const quoteReducers = (state = initialState, action) => {
    switch(action.type){
        case FETCH_QUOTE_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_QUOTE_SUCCESS:
            return{
                ...state,
                loading: false,
                quote: action.payload
            }
        case FETCH_QUOTE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default quoteReducers;