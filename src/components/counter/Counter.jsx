import React from "react";
import "./counter.css";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount, resetCount } from "../../actions/counter/actions";

const Counter = () => {
  const counted = useSelector((state) => state.counterReducers.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <div className="counter">
        <h2>Task in mind but to add later: <span className="count-value">{counted}</span></h2>
        <div className="counter-buttons">
          <button className="plus-button" onClick={() => dispatch(increaseCount())}>+</button>
          <button className="minus-button" onClick={() => dispatch(decreaseCount())}>-</button>
          <button className="reset-button" onClick={() => dispatch(resetCount())}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
