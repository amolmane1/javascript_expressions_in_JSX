import React from "react";
import ReactDOM from "react-dom";

var name = "Amol";
var lName = "Mane";

ReactDOM.render(
  <div>
    <h1>Hello {name + " " + lName}!</h1>
    <p>Your number is {Math.floor(Math.random() * 10 + 1)}</p>
  </div>,
  document.getElementById("root")
);
