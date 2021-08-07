import { GameItem } from './game.interfaces';

export interface BonusesPerItems {
  [key: string]: {
    methods: Array<(params: GameItem) => number>;
  };
}

export interface ItemsRoles {
  items: string[];
  bonusName: string;
}

export type Bonuses = Record<string, (gameItem: GameItem) => number>;
