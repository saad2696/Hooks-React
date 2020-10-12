import React from "react";
// import ClassCounter from "./components/ClassCounter";
import "./App.css";
import ComponentC from "./components/ComponentC";
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

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <TwoHookCounter/> */}
      {/* <ThreeHookCounter/> */}
      {/* <FourHookCounter/> */}
      {/* <FiveClassCounter/> */}
      {/* <SixHookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Saad"}>
        <ChannelContext.Provider value={"yourdailyetech"}>
          <ComponentC /> 
        </ChannelContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
