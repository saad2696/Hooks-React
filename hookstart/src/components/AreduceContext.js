import React, { useContext } from "react";
import { CountContext } from "../App";

function AreduceContext() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <div>COMPONENT A  --- {countContext.countState}</div>
      {/* <div>{countContext.countState}</div> */}
      <button
        onClick={() => {
          countContext.countDispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default AreduceContext;
