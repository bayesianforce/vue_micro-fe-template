import { Bonuses, BonusesPerItems, ItemsRoles } from '../types';

/**
 * It returns all bonus roles applicable for each item
 */
export function mapBonusesWithItems(itemsRoles: ItemsRoles[], bonuses: Bonuses): BonusesPerItems {
  return itemsRoles.reduce((acc: BonusesPerItems, { items, bonusName }) => {
    items.forEach((name) => {
      acc[name] = {
        methods: [...(acc[name]?.methods || []), bonuses[bonusName]],
      };
    });
    return acc;
  }, {});
}
