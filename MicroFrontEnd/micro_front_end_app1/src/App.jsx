import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: micro_front_end_app1</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
