import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import UseEffect from "./components/UseEffect";
import ClassLifecycle from "./components/ClassLifecycle";
import ClassState from "./components/ClassState";
import UseState from "./components/UseState";
function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hooks: The New Hottness</h1>
        <NavBar />
        <Route exact path="/lifecycle/new" component={UseEffect}></Route>
        <Route exact path="/lifecycle/old" component={ClassLifecycle}></Route>
        <Route exact path="/state/new" component={UseState}></Route>
        <Route exact path="/state/old" component={ClassState}></Route>
      </div>
    </Router>
  );
}

export default App;
