import React from 'react';
import ClockPointer from './commons/ClockPointer';
import './Clock.css';

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentWillMount() {
    setInterval(this.updateClockState, 100);
  }

  updateClockState = () => {
    this.setState({ date: new Date() });
  };

  render() {
    const { date } = this.state;

    return (
      <div className="Clock__root">
        <ClockPointer type="hours" date={date} />
        <ClockPointer type="minutes" date={date} />
        <ClockPointer type="seconds" date={date} />
      </div>
    );
  }
}

export default Clock;
