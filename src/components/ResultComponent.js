import React, { Component } from "react";

class ResultComponent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.result}</p>
      </div>
    );
  }
}

export default ResultComponent;
