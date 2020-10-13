import React, { useReducer } from "react";
//local multiple states
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
//action instruction to reducer function
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "increment2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
    case "reset":
      return initialState;

    default:
      return currentState;
  }
};
//array destructioring to get count and dispatch
function ReducerCounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First counter {count.firstCounter}</div>
      <div>Second Counter {count.secondCounter}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}
      >
        Increment 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        Decrement 5
      </button>

      <button
        onClick={() => {
          dispatch({ type: "increment2", value: 1 });
        }}
      >
        Increment 2nd counter
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement2", value: 1 });
        }}
      >
        Decrement 2nd counter
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ReducerCounterTwo;
