import React, { Component } from 'react';
import Clock from './components/Clock';

class App extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => this.setState({ date: '' }), 1000);
  }

  render() {
    const { date } = this.state;

    return (
      <React.Fragment>
        <Clock />
      </React.Fragment>
    );
  }
}

export default App;
