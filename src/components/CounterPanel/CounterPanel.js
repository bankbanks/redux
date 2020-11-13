import React, { useState } from "react";
import { connect } from "react-redux";
import "./CounterPanel.css";

function CounterPanel(props) {
    const [inputValue,setInputValue] = useState("")
    const add = () =>{
        props.onAddTenCounter(inputValue)
    }

    const del = () =>{
        props.onSubtractCounter(inputValue)
    }
   
  return (
    <div>
      <button onClick={props.onIncrementCounter} className="bannk">
        INCREASE
      </button>
      <button onClick={props.onDecrementCounter} className="bannk">
        DECREASE
      </button>
      <button onClick={add} className="bannk">
        ADD {inputValue}
      </button>
      <button onClick={del} className="bannk">
        SUBTRACT {inputValue}
      </button>
      <input placeholder="put number in here" value ={inputValue} onChange={(e) => setInputValue(+e.target.value)}/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddTenCounter: (value) => dispatch({ type: "ADDTEN", value: value }),
    onSubtractCounter: (value) => dispatch({ type: "SUBTRACTTEN", value: value }),
  };
};

export default connect(null, mapDispatchToProps)(CounterPanel);
