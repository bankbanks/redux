import React from "react";
import CounterDisplay from "../../components/CounterDisplay/CounterDisplay";
import CounterPanel from "../../components/CounterPanel/CounterPanel";

function Counter() {
//const [counter, setCounter]= useState(0)

  return (
    <div className="App">
      <h1>welcome to my counter. By Sonter</h1>
      <CounterDisplay />
      <CounterPanel />
    </div>
  );
}

export default Counter;
