import React from "react";
import ReactDOM from "react-dom";
import Hello from 'micro_front_end_app1/Hello'
import Welcome from 'micro_front_end_app2/Welcome'

import "./index.css";

const App = () => (
  <div className="container">
    <Hello/>
    <br/>
    <Welcome/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
