import React from 'react';
import ClassCounter from './components/ClassCounter'
import './App.css';
import HookCounter from './components/1HookCounter';
import TwoHookCounter from './components/TwoHookCounter'
import ThreeHookCounter from './components/ThreeHookCounter';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
     {/* <TwoHookCounter/> */}
     <ThreeHookCounter/>
    </div>
  );
}

export default App;
