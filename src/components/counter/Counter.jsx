import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
import PropTypes from "prop-types";

class Counter extends Component {
  render() {
    const { count, handlerCounter } = this.props;
    return (
      <div>
        <button onClick={handlerCounter}>Click {count} times</button>
      </div>
    );
  }
}
// eslint-disable-next-line react/no-typos
Counter.proptypes = {
  count: PropTypes.string.isRequired,
  handlerCounter: PropTypes.func.isRequired
};

export default UpdatedComponent(Counter);
