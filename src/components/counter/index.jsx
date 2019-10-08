import React, { Component } from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

class index extends Component {
  render() {
    return (
      <div>
        Counter component
        <Counter />
        <HoverCounter />
      </div>
    );
  }
}

export default index;
