export interface Item {
  name: string;
  unitPoints: number;
}

export interface GameItem {
  quantity: number;
  unitPoints: number;
  score: number;
}

export interface ScoreItem extends GameItem {
  name: string;
}
export interface Score {
  gameItems: ScoreItem[];
  bonus: number;
  total: number;
}
