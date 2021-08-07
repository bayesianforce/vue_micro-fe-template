import { bonuses } from '../bonuses';
import { Game } from '../game';
import { mapBonusesWithItems } from '../../utils/mapBonusesWithItems';

import items from '../../mock/items.json';
import itemsBonusesRoles from '../../mock/itemsBonusesRoles.json';

describe('Game test suite', () => {
  const game = new Game(mapBonusesWithItems(itemsBonusesRoles, bonuses), items);

  afterEach(() => {
    game.reset();
  });

  it('should add one element A to the game score', () => {
    game.add('A');

    expect(game.gameItems['A'].quantity).toBe(1);
    expect(game.gameItems['A'].score).toBe(50);
  });

  it('should add 2 element B to the game score and apply a bonus', () => {
    game.add('B');
    game.add('B');

    expect(game.gameItems['B'].quantity).toBe(2);
    expect(game.gameItems['B'].score).toBe(90);
  });

  it('should get the current score including the total score and  the amount of bonuses', () => {
    game.add('A');
    game.add('B');
    game.add('A');
    game.add('B');
    game.add('B');
    game.add('A');
    game.add('A');

    const result = game.getCurrentScore();

    expect(result.total).toBe(370);
    expect(result.bonus).toBe(80);
    expect(result.gameItems[0].score).toBe(250);
    expect(result.gameItems[1].score).toBe(120);
  });

  it('should add reset the game', () => {
    game.add('B');
    game.add('B');
    game.reset();

    expect(game.gameItems['B'].quantity).toBe(0);
    expect(game.gameItems['B'].score).toBe(0);
  });
});
