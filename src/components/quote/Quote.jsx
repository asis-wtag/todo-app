import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuote } from '../../actions/quote/action';
import './quote.css'

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quoteReducers.quote);
  const loading = useSelector((state) => state.quoteReducers.loading);
  const error = useSelector((state) => state.quoteReducers.error);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  return (
    <div className='main'>
      <div className='secondary'>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {quote && <p>{quote}</p>}
      <button className='btn-1' onClick={() => dispatch(fetchQuote())}>Fetch New Quote</button>
      </div>
    </div>
  );
};

export default Quote;