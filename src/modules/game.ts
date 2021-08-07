import { ItemsWithBonusesActivated } from '../enums';
import { Item, GameItem, BonusesPerItems, Score } from '../types';

export class Game {
  gameItems: Record<string, GameItem>;
  bonuses: BonusesPerItems;

  constructor(bonuses: BonusesPerItems, items: Item[]) {
    this.gameItems = normalizeItems(items);
    this.bonuses = bonuses;
  }

  private _hasBonusesEnabled(name: string): boolean {
    return name in this.bonuses;
  }

  private _getBonusesPerItem(itemName: ItemsWithBonusesActivated, item: GameItem): number {
    if (!this._hasBonusesEnabled(itemName)) {
      return 0;
    }

    return this.bonuses[itemName].methods.reduce<number>((acc, method) => acc + method(item), 0);
  }

  /**
   *  Add a new item and apply bonuses if they are available
   */
  add(itemName: string): void {
    const item = this.gameItems[itemName];
    item.quantity += 1;

    const bonus = this._getBonusesPerItem(
      itemName as ItemsWithBonusesActivated,
      this.gameItems[itemName],
    );
    item.score = bonus || item.score + item.unitPoints;
  }

  /**
   *  Retrieves detailed info about bonus, score and game items scores
   */
  getCurrentScore(): Score {
    const gameItems = Object.values(this.gameItems);
    const bonus = gameItems.reduce(
      (acc, { score, quantity, unitPoints }) => acc + (score - quantity * unitPoints),
      0,
    );
    const total = gameItems.reduce((acc, { score }) => acc + score, 0);

    return {
      gameItems,
      bonus,
      total,
    };
  }

  /**
   *  Reset the game to the initial status
   */
  reset(): void {
    for (const name in this.gameItems) {
      const item = this.gameItems[name];
      item.quantity = 0;
      item.score = 0;
    }
  }
}

/**
 * Transforms an array of Items to an HashMap
 */
function normalizeItems(Items: Item[]): Record<string, GameItem> {
  return Items.reduce<Record<string, GameItem>>((acc, { name, unitPoints }) => {
    acc[name] = { unitPoints, quantity: 0, score: 0 };
    return acc;
  }, {});
}
