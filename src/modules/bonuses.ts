import { GameItem, Bonuses } from '../types';

// Add a new Bonus Role here
function twoHundredPerThree({ quantity }: GameItem): number {
  return quantity === 3 ? 200 : 0;
}

function ninetyPerTwo({ quantity }: GameItem): number {
  return quantity == 2 ? 90 : 0;
}

// we expose bonuses roles here
export const bonuses: Bonuses = {
  ninetyPerTwo,
  twoHundredPerThree,
};
