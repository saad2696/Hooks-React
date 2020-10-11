import React, { useState } from "react";
import SixHookMouse from "./SixHookMouse";

function MouseContainer() {
  const [display, SetDispaly] = useState(true);
  return (
    <div>
      <button onClick={()=>SetDispaly(!display)}>Toggle display</button>
      {display && <SixHookMouse/> }
    </div>
  );
}

export default MouseContainer;
