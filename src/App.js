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

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <ResultComponent result={this.state.result} />
        <KeyPad onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
