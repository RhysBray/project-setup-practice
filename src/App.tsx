import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lol from "./Components/lol-component/lol";
import Rofl from "./Components/rofl-component/rofl";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Lol} />
        <Route path="/lol" component={Lol} />
        <Route path="/Rofl" component={Rofl} />
        <Redirect to="/" />
      </Switch>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.tsx</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
