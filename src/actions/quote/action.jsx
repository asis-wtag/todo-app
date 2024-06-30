import { FETCH_QUOTE_START, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAILURE } from "./action_types";

const fetchQuoteStart = () => ({
    type: FETCH_QUOTE_START,
});

const fetchQuoteSucess = (quote) => ({
    type: FETCH_QUOTE_SUCCESS,
    payload: quote
})

const fetchQuoteFailure = (error) => ({
    type: FETCH_QUOTE_FAILURE,
    payload: error
})

export const fetchQuote = () => {
    return async (dispatch) => {
        dispatch(fetchQuoteStart());

        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            dispatch(fetchQuoteSucess(data.content+" ~ "+ "\""+data.author+"\""));
        }
        catch (error){
            dispatch(fetchQuoteFailure(error.message))
        }
    }
}