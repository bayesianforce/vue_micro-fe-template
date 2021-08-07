import { bonuses } from '../bonuses';
import { mapBonusesWithItems } from '../../utils/mapBonusesWithItems';

import itemsBonusesRoles from '../../mock/itemsBonusesRoles.json';

describe('Game test suite', () => {
  it('should add one element A to the game score', () => {
    const result = mapBonusesWithItems(itemsBonusesRoles, bonuses);

    expect(result).toMatchObject({
      B: { methods: [bonuses.ninetyPerTwo] },
      A: { methods: [bonuses.twoHundredPerThree] },
    });
  });
});
