import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  incrementCounter() {}

  decrementCounter() {}

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button type="button">Increment</button>
        <button type="button">Decrement</button>
      </div>
    );
  }
}

export default App;
