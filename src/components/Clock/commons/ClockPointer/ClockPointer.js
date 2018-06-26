import React from 'react';

class ClockPointer extends React.Component {
  render() {
    const { type, date } = this.props;
    let degree = 0;
    if (type === 'seconds') {
      const maxAngle = 360;
      const maxSeconds = 60;
      const angleForEachSecond = maxAngle / maxSeconds;
      degree = date.getSeconds() * angleForEachSecond;
    } else if (type === 'minutes') {
      const maxAngle = 360;
      const maxMinutes = 60;
      const angleForEachMinute = maxAngle / maxMinutes;
      degree = date.getMinutes() * angleForEachMinute;
    } else if (type === 'hours') {
      const maxAngle = 360;
      const maxHour = 24;
      const angleForEachHour = maxAngle / maxHour;
      degree = date.getHours() * angleForEachHour;
    }

    return (
      <div
        className="ClockPointer__root"
        style={{ transform: `rotate(${degree}deg)` }}
      />
    );
  }
}

export default ClockPointer;
