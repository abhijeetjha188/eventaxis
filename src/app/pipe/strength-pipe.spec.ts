import { StrengthPipe } from './strength-pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('it should return strong when value <10 is passed', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('weak')
  })
});
