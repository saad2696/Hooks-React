import React, { useState, useMemo } from "react";
//use memo is used to catche the answer by invoking function 
function MemoHookCounter() {
  const [count, setCount] = useState(0);
  const [counttwo, SetCountwo] = useState(0);
  const incrementHandler = () => {
    return setCount((prevstate) => prevstate + 1);
  };
  const decrementHandler = () => {
    return setCount((prevstate) => prevstate - 1);
  };
  const incrementHandlertwo = () => {
    return SetCountwo((prevstate) => prevstate + 1);
  };
  const decrementHandlertwo = () => {
    return SetCountwo((prevstate) => prevstate - 1);
  };

  const iseven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  },[count]);

  return (
    <div>
      <h1>Counter one {count}</h1>
      <div>{iseven ? "even" : "odd"}</div>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <div>
        <h1>Counter Two {counttwo}</h1>
        <button onClick={incrementHandlertwo}>+</button>
        <button onClick={decrementHandlertwo}>-</button>
      </div>
    </div>
  );
}

export default MemoHookCounter;
