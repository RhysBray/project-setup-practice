import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lol from "./Components/lol-component/lol";
import Rofl from "./Components/rofl-component/rofl";
import Counter from "./Components/counter/counter";
import { Switch, Route, Redirect } from "react-router-dom";
export interface IProps {}
export interface IState {
  score: number;
}

class App extends Component<IProps, IState> {
  state = { score: 0 };

  render() {
    return (
      <div onClick={this.addToScore}>
        <Switch>
          <Route path="/lol" component={Lol} />
          <Route path="/Rofl" component={Rofl} />
          <Route exact path="/" component={Lol} />
          <Redirect to="/" />
        </Switch>
        <Counter addToScore={this.state.score} />
      </div>
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
  addToScore = () => {
    this.setState({ score: this.state.score += 1 });
    console.log(this.state.score);
  };
}

export default App;
