import React, { useReducer } from "react";
// import ClassCounter from "./components/ClassCounter";
import "./App.css";
// import ReducerCounter3 from "./components/ReducerCounter3";
// import ComponentC from "./components/ComponentC";
// import ReducerCounterOne from "./components/ReducerCounterOne";
// import ReducerCounterTwo from "./components/ReducerCounterTwo";
// import DataFetching from "./components/DataFetching";
// import FiveClassCounter from "./components/FiveClassCounter";
// import IntervalClassCounter from "./components/IntervalClassCounter";
// import IntervalHookCounter from "./components/IntervalHookCounter";
// import MouseContainer from "./components/MouseContainer";
// import SixHookMouse from "./components/SixHookMouse";
// import HookCounter from "./components/1HookCounter";
// import TwoHookCounter from "./components/TwoHookCounter";
// import ThreeHookCounter from "./components/ThreeHookCounter";
// import FourHookCounter from "./components/FourHookCounter";
import AreduceContext from "./components/AreduceContext";
import BreduceContext from "./components/BreduceContext";
import ClassTimer from "./components/ClassTimer";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CreduceContext from "./components/CreduceContext";
import DataFetching from "./components/DataFetching";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DoctitleTwo";
// import MemoHookCounter from "./components/MemoHookCounter";
 import RefHookTimer from "./components/RefHookTimer";
// import FocusInput from "./components/FocusInput";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
//action instruction to reducer function
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
<div className="App">
  <CounterOne/>
  <CounterTwo/>
  {/* <DocTitleOne/>
  <DocTitleTwo/> */}
  {/* <RefHookTimer/> */}
  {/* <ClassTimer/> */}
  {/* <FocusInput/> */} 
  {/* <MemoHookCounter/> */}
  {/* <DataFetchingTwo/> */}
{/* <DataFetchingOne/> */}
</div>
  );
  //   <CountContext.Provider
  //     value={{ countState: count, countDispatch: dispatch }}
  //   >
  //     <div className="App">
  //       {/* <ClassCounter/> */}
  //       {/* <HookCounter/> */}
  //       {/* <TwoHookCounter/> */}
  //       {/* <ThreeHookCounter/> */}
  //       {/* <FourHookCounter/> */}
  //       {/* <FiveClassCounter/> */}
  //       {/* <SixHookMouse/> */}
  //       {/* <MouseContainer/> */}
  //       {/* <IntervalClassCounter/> */}
  //       {/* <IntervalHookCounter/> */}
  //       {/* <DataFetching /> */}
  //       {/* <UserContext.Provider value={"Saad"}>
  //       <ChannelContext.Provider value={"yourdailyetech"}>
  //         <ComponentC /> 
  //       </ChannelContext.Provider>
  //     </UserContext.Provider> */}
  //       {/* <ReducerCounterOne/> */}
  //       {/* <ReducerCounterTwo/> */}
  //       {/* <ReducerCounter3/> */}

  //       <div>count - {count}</div>
  //       <AreduceContext />
  //       <BreduceContext />
  //       <CreduceContext />
  //     </div>
  //   </CountContext.Provider>
  // );
}

export default App;
