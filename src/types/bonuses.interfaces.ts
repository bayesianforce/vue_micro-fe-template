import { GameItem } from './game.interfaces';

export interface Bonuses {
  [key: string]: {
    methods: Array<(params: GameItem) => number>;
  };
}

export interface BonusesQueues {
  twoHundredPerThreeQueue: string[];
  ninetyPerTwoQueue: string[];
}
