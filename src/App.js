import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import NewWay from "./components/NewWay";
import OldWay from "./components/OldWay";

function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hooks: The New Hottness</h1>
        <NavBar />
        <Route exact path="/new" component={NewWay} />
        <Route exact path="/" component={OldWay} />
      </div>
    </Router>
  );
}

export default App;
