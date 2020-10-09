import React, { useState } from "react";

function HookCounter() {
  //this hook take first parameter as intial  value of state property
  //this hook take second parameter as current  value of state property
  //method of capable of state properrty
  //array destructioring method is used here 
  //count = 0  here 
  //set count will be used to set state 
  //variable count will always hold the current count value 
  //setcount will accept changes to the count through argument
  const [count , setCount ] = useState(0);
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
