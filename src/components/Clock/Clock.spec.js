import React from 'react';
import { shallow } from 'enzyme';
import Clock from './Clock';

describe('Clock', () => {
  // it('should render Clock correctly', () => {
  //   const clock = shallow(<Clock />);
  //   expect(clock).toMatchSnapshot();
  // });

  it('should initialize the `state` with a instance of Date', () => {
    const clock = shallow(<Clock />);
    expect(clock.state().date).toBeInstanceOf(Date);
  });

  it('should update clock `state` every 100 milliseconds', () => {
    jest.useFakeTimers();
    const clock = shallow(<Clock />);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(
      clock.instance().updateClockState,
      100,
    );
  });

  it('should have three pointers for hours, minutes and seconds', () => {
    const clock = shallow(<Clock />);
    expect(clock.find('ClockPointer')).toHaveLength(3);
  });
});
