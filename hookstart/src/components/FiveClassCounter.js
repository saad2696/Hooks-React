import React, { useState, useEffect } from "react";

function FiveClassCounter() {
  const [count, setCount] = useState(0);
  //in use effect we pass a parameter which is a function
  //which is executed after every render of a component
  //useEffect run after each render of component
  const [name, setName] = useState(" ");
  useEffect(() => {
    console.log('use effect updating document.title')
    document.title = `You clicked ${count} times `;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Click {count} times
      </button>
    </div>
  );
}

export default FiveClassCounter;
