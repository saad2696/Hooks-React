import React, { useState, useEffect } from "react";
function SixHookMouse() {
  const [x, Setx] = useState(0);
  const [y, Sety] = useState(0);
  const logMousePos = (e) => {
    console.log("Mouse Event");
    Setx(e.clientX);
    Sety(e.clientY);
  };
  useEffect(() => {
    console.log("use effect called");
    window.addEventListener("mousemove", logMousePos);
    //clean code for componentdidunmount 
    return () => {
      console.log("component unmount mode");
      window.addEventListener("mousemove", logMousePos);
    };
  }, []);

  return (
    <div>
      Hooks X - {x} , Y - {y}
    </div>
  );
}

export default SixHookMouse;
