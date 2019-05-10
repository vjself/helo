import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import routes from "./routes";
import { withRouter } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <div className="nav">
        {props.location.pathname === "/" && <Nav />}
        {routes}
      </div>
    </div>
  );
}

export default withRouter(App);
