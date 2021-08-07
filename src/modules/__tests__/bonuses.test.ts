import bonuses, { ninetyPerTwo, twoHundredPerThree } from '../bonuses';

describe('Game test suite', () => {
  it('should add one element A to the game score', () => {
    const result = bonuses({ twoHundredPerThreeQueue: ['A'], ninetyPerTwoQueue: ['B'] });
    expect(result).toMatchObject({
      B: { methods: [ninetyPerTwo] },
      A: { methods: [twoHundredPerThree] },
    });
  });
});
