// Code EyesOnMe Component Here
import React from "react";
class EyesOnMe extends React.Component {
  focusHandler = () => {
    console.log("Good!");
  };

  blurhandler = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return (
      <button
        type="button"
        onFocus={this.focusHandler}
        onBlur={this.blurhandler}
      >
        HTML text
      </button>
    );
  }
}
export default EyesOnMe;
