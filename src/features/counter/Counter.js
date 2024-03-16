import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);

  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0; // If it's not a number it will return 0

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={resetAll}>Reset</button>
      </div>
      <div>
        <input
          type="text"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
