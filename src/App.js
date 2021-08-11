import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import KeyPad from "./components/KeyPad";
import ResultComponent from "./components/ResultComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  render() {
    return (
      <div className="App">
        <ResultComponent result={this.state.result} />
        <KeyPad />
      </div>
    );
  }
}

export default App;
