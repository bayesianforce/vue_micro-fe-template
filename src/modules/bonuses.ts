import { GameItem, Bonuses, BonusesQueues } from '../types';

/**
 * List of bonuses
 */
export function twoHundredPerThree({ quantity }: GameItem): number {
  return quantity === 3 ? 200 : 0;
}

export function ninetyPerTwo({ quantity }: GameItem): number {
  return quantity == 2 ? 90 : 0;
}

/**
 * It returns all bonus roles applicable for each item
 */
export default function ({ twoHundredPerThreeQueue, ninetyPerTwoQueue }: BonusesQueues): Bonuses {
  const twoHundredPerThreeBonus = twoHundredPerThreeQueue.map(
    (name) => ({ name, method: [twoHundredPerThree] }),
    {},
  );

  const ninetyPerTwoBonus = ninetyPerTwoQueue.map((name) => ({ name, method: [ninetyPerTwo] }), {});

  return [...ninetyPerTwoBonus, ...twoHundredPerThreeBonus].reduce(
    (acc: Bonuses, { name, method }) => {
      acc[name] = {
        methods: [...(acc[name]?.methods || []), ...method],
      };
      return acc;
    },
    {},
  );
}
