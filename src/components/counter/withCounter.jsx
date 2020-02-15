import React, { Component } from "react";

const UpdatedComponent = OriginalComponent => {
  class NewComponent extends Component {
    state = {
      count: 0
    };

    handlerCounter = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      const { count } = this.state;
      return (
        <div>
          <OriginalComponent
            count={count}
            handlerCounter={this.handlerCounter}
          />
        </div>
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
