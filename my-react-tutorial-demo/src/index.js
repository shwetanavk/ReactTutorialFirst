import React from "react";
import ReactDom from "react-dom";

//Since index.js is the starting point of javascript in the
//applicaition, we add this:

//We capatilize the first letter of the function so react knows
//this is a special type of function and it is a component
function Greeting() {
  return <h4>This is JSX and my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
