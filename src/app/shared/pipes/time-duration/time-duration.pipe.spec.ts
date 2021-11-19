import { TimeDurationPipe } from './time-duration.pipe';

describe('TimeDurationPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeDurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format time duration with hours', () => {
    const pipe = new TimeDurationPipe();
    expect(pipe.transform(88)).toEqual('1h 28min');
  });

  it('should format time duration without hours', () => {
    const pipe = new TimeDurationPipe();
    expect(pipe.transform(50)).toEqual('50min');
  });
});
