import React from "react";
function App(props) {
  return (
    <div className="App text-center">
      <h1>{props.value}</h1>
      <button
        className="btn btn-primary btn-sm mr-2"
        onClick={props.onIncrease}>
        Increase
      </button>
      <button 
        className="btn btn-danger btn-sm mr-2" 
        onClick={props.onDecrease}>
        Decrease
      </button>
    </div>
  );
}

export default App;
