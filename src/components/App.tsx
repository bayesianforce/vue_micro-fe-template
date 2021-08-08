import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Item, Score } from '../types';
import { mapBonusesWithItems } from '../utils/mapBonusesWithItems';
import { bonuses } from '../modules/bonuses';
import { Game } from '../modules';
import ScoreView from './Score';
import Points from './Points';

import data from '../mock/items.json';
import itemsBonusesRoles from '../mock/itemsBonusesRoles.json';

const AppLayout = styled.main`
  display: flex;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const PointsLayout = styled.section`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
`;

const ScoreLayout = styled.aside`
  display: flex;
  flex-direction: column;
  border-left: 1px solid grey;
  width: 300px;
`;

const App = memo((): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);
  const [score, setScore] = useState<Score>({
    gameItems: [],
    bonus: 0,
    total: 0,
  });

  const game = useRef<Game>();

  const handleAddPoint = useCallback((itemName) => {
    if (game.current) {
      game.current.add(itemName);
      setScore(game.current.getCurrentScore());
    }
  }, []);

  const handleReset = useCallback(() => {
    if (game.current) {
      game.current.reset();
      setScore(game.current.getCurrentScore());
    }
  }, []);

  const initItems = useCallback(async () => {
    try {
      const itemsToStore = await Promise.resolve(data);
      if (itemsToStore?.length) {
        game.current = new Game(mapBonusesWithItems(itemsBonusesRoles, bonuses), itemsToStore);
        setItems(itemsToStore);
      }
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  useEffect(() => {
    initItems();
  }, [initItems]);

  return (
    <AppLayout>
      <PointsLayout>
        <Points items={items} onAddPoint={handleAddPoint} />
      </PointsLayout>
      <ScoreLayout>
        <ScoreView {...score} onReset={handleReset} />
      </ScoreLayout>
    </AppLayout>
  );
});

export default App;
