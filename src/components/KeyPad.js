import React, { Component } from "react";

class KeyPad extends Component {
  render() {
    return (
      <div className="button">
        <button name="("> ( </button>
        <button name="CE"> CE </button>
        <button name=")"> ) </button>
        <button name="C"> C </button>
        <br></br>
      </div>
    );
  }
}

export default KeyPad;
