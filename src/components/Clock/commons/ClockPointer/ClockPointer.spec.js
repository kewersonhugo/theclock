import React from 'react';
import { shallow } from 'enzyme';
import ClockPointer from './ClockPointer';

describe('ClockPointer', () => {
  it('should render correctly', () => {
    const clockPointer = shallow(<ClockPointer />);
    expect(clockPointer).toMatchSnapshot();
  });

  it('should receive a `prop` date with a Date instance', () => {
    const clockPointer = shallow(<ClockPointer date={new Date()} />);
    expect(clockPointer.instance().props.date).toBeInstanceOf(Date);
  });

  it('should have transform in style `prop` ', () => {
    const clockPointer = shallow(<ClockPointer date={new Date()} />);
    expect(clockPointer.props().style).toHaveProperty('transform');
  });

  describe('when type="ENUM(seconds|minutes|hours)" is passed as `prop`', () => {
    it('should set degree to 0 when type `prop` is not properly passed', () => {
      const clockPointer = shallow(<ClockPointer date={new Date()} />);
      expect(clockPointer.props().style.transform).toEqual(`rotate(0deg)`);
    });

    it('should set degree to transform:rotate(degree) according date seconds', () => {
      const currentDate = new Date();
      const maxAngle = 360;
      const maxSeconds = 60;
      const angleForEachSecond = maxAngle / maxSeconds;
      const currentAngleForSeconds =
        currentDate.getSeconds() * angleForEachSecond;
      const clockPointer = shallow(
        <ClockPointer type="seconds" date={new Date()} />,
      );
      expect(clockPointer.props().style.transform).toEqual(
        `rotate(${currentAngleForSeconds}deg)`,
      );
    });

    it('should set degree to transform:rotate(degree) according date minutes', () => {
      const currentDate = new Date();
      const maxAngle = 360;
      const maxMinutes = 60;
      const angleForEachMinute = maxAngle / maxMinutes;
      const currentAngleForMinutes =
        currentDate.getMinutes() * angleForEachMinute;
      const clockPointer = shallow(
        <ClockPointer type="minutes" date={new Date()} />,
      );
      expect(clockPointer.props().style.transform).toEqual(
        `rotate(${currentAngleForMinutes}deg)`,
      );
    });

    it('should set degree to transform:rotate(degree) according date hours', () => {
      const currentDate = new Date();
      const maxAngle = 360;
      const maxHours = 24;
      const angleForEachHour = maxAngle / maxHours;
      const currentAngleForHours = currentDate.getHours() * angleForEachHour;
      const clockPointer = shallow(
        <ClockPointer type="hours" date={new Date()} />,
      );
      expect(clockPointer.props().style.transform).toEqual(
        `rotate(${currentAngleForHours}deg)`,
      );
    });
  });
});
