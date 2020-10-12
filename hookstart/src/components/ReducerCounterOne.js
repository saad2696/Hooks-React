import React,{useReducer} from 'react'


function ReducerCounterOne() {
    useReducer(reducer,initialState)
    
    return (
        <div>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
    )
}

export default ReducerCounterOne
