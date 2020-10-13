import {useState} from 'react'

function useCounter(initialCount =0 , value  ) {
    const [count, SetCount] = useState(initialCount);
    const increment = () => {
        SetCount((prevCount) => prevCount + value);
      };
      const decrement = () => {
        SetCount((prevCount) => prevCount - value );
      };
      const reset = () => {
        SetCount(initialCount);
      };
  return [count ,increment, decrement , reset]
}

export default useCounter
