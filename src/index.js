import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./views";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <div className="application-wrapper">
      <Application />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
