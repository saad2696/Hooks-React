import React, { useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";

function DocTitleOne() {
  const [count, SetCount] = useState(0);
  useDocumentTitle(count)
  return (
    <div>
      <div>count === {count}</div>
      <button onClick={() => SetCount((prevState) => prevState + 1)}>
        increment{" "}
      </button>
    </div>
  );
}

export default DocTitleOne;
