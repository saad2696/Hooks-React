import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        Counter :
        <div>
          <h3>{count}</h3>
          <button onClick={this.incrementCount}>Counter Button</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
