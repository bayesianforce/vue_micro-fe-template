export interface Item {
  name: string;
  unitPoints: number;
}

export interface GameItem {
  quantity: number;
  unitPoints: number;
  score: number;
}

export interface Score {
  gameItems: GameItem[];
  bonus: number;
  score: number;
}
