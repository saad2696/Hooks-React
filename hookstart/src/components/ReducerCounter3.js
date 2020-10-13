import React, { useReducer } from "react";
//have multiple user reducer using same function 
const initialState = 0;
//action instruction to reducer function
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};
//array destructioring to get count and dispatch
function ReducerCounter3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2 , dispatchTwo ] =  useReducer(reducer , initialState);

  return (
    <div>
      <div>
          <div>Count one - {count}</div>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
      </div>
      <div>
          <div>Count two - {count2}</div>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatchTwo("decrement");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatchTwo("reset");
        }}
      >
        Reset
      </button>
      </div>
    </div>
  );
}

export default ReducerCounter3;
