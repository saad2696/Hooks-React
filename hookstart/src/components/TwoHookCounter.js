import React, { useState } from 'react';

function TwoHookCounter() {
  const initialCount = 0;
  const [count, setcount] = useState(initialCount);
  //handler made or function for increment five 
  const incrementFive=()=>{
      for( let i=0;i<5;i++){
          setcount(prevCount=> prevCount + 1 )
      }
  }
  return (<div>
      Count : {count}
      {/* <button onClick={()=> setcount(initialCount)}>Reset</button>
      <button onClick={()=> setcount(count+1 )}>increment</button>
      <button onClick={()=> setcount(count-1 )}>decrement</button> */}

      {/* another way  */}
  {/* a better way of implementing  */}
      <button onClick={()=> setcount(initialCount)}>Reset</button>
      <button onClick={()=> setcount(prevCount=> prevCount+1)}>increment</button>
      <button onClick={()=> setcount(prevCount=> prevCount-1)}>decrement</button>
      <button onClick={incrementFive}>Increment Five</button>
      
  </div>)
}

export default TwoHookCounter;
