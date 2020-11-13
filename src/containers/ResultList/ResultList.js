import React from "react";
import { connect } from "react-redux";

function ResultList(props){
  return (
    <div>
        <button onClick={()=>{props.onAdd(props.ctr)}}>store current counter</button>
      <h1>These are results you saved</h1>
      <ul
        style={{
          width: "423px",
          margin: "0 auto",
          fontSize: "23px",
          fontweight: "bold",
          listStyleType: "-moz-initial",
          color: "dark",
        }}
      >
        {props.rl.map(({ id, result }) => (
          <li>{result}<br/> <button onClick={() => {props.onDelete(id)}}>delete</button></li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rl: state.resultList,
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (value) => dispatch({type: "STORE_RESULT", counter:value}),
        onDelete: (id) => dispatch({type: "DELETE_RESULT", id:id}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ResultList);
