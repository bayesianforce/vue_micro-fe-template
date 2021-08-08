import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Item, Score } from '../types';
import { mapBonusesWithItems } from '../utils/mapBonusesWithItems';
import { bonuses } from '../modules/bonuses';
import { Game } from '../modules';

import data from '../mock/items.json';
import itemsBonusesRoles from '../mock/itemsBonusesRoles.json';

const AppLayout = styled.main`
  display: flex;
  height: 100vh;
  border: 1px solid grey;
`;

const PointsLayout = styled.section`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
`;

const PointsHeaderLayout = styled.section`
  border-bottom: 1px solid grey;
`;

const ItemsLayout = styled.article`
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
`;

const ItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 1px solid grey;
  margin: 5px;
  cursor: pointer;
`;

const ScoreLayout = styled.aside`
  display: flex;
  flex-direction: column;
  border-left: 1px solid grey;
  width: 300px;
`;

const ScoreHeaderLayout = styled.section`
  border-bottom: 1px solid grey;
  width: 300px;
`;
const DetailsScoreStyle = styled.section`
  flex: auto;
`;

const ItemsScoreStyle = styled.table`
  text-align: center;
  width: 100%;
  height: 100%;

  tbody {
    display: block;
    height: 100%;
    overflow: auto;
  }

  td {
    width: 33.33%;
    padding: 10px;
  }

  tr {
    border-bottom: 1px solid grey;
    display: table;
    width: 100%;
  }
`;

const ItemCell = styled.div`
  margin: 0 auto;
  width: 40px;
  border: 1px solid grey;
`;

const TotalBonusStyle = styled.section`
  border-top: 1px solid grey;
`;

const TotalScoreStyle = styled.section`
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid grey;
`;

function App(): JSX.Element {
  const [items, setItems] = useState<Item[]>([]);
  const [score, setScore] = useState<Score>({
    gameItems: [],
    bonus: 0,
    total: 0,
  });

  const game = useRef<Game>();

  const handleAddItem = useCallback((itemName) => {
    if (game.current) {
      game.current.add(itemName);
      setScore(game.current.getCurrentScore());
    }
  }, []);

  function handleReset() {
    if (game.current) {
      game.current.reset();
      setScore(game.current.getCurrentScore());
    }
  }

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
        <PointsHeaderLayout>
          <h1>Kahoot points</h1>
        </PointsHeaderLayout>
        <ItemsLayout>
          {items.map(({ name }) => (
            <ItemStyle key={name} onClick={() => handleAddItem(name)}>
              <label>{name}</label>
            </ItemStyle>
          ))}
        </ItemsLayout>
      </PointsLayout>
      <ScoreLayout>
        <ScoreHeaderLayout>
          <h1>Player Items</h1>
        </ScoreHeaderLayout>
        <DetailsScoreStyle>
          <ItemsScoreStyle>
            <thead>
              <tr>
                <th>Item</th>
                <th>QTY</th>
                <th>Store</th>
              </tr>
            </thead>
            <tbody>
              {score.gameItems.map(({ name, quantity, score }) =>
                quantity ? (
                  <tr key={name}>
                    <td>
                      <ItemCell>{name}</ItemCell>
                    </td>
                    <td>{quantity}</td>
                    <td>{score}</td>
                  </tr>
                ) : null,
              )}
            </tbody>
          </ItemsScoreStyle>
        </DetailsScoreStyle>
        <TotalBonusStyle>
          <h3>Bonuses {score.bonus}</h3>
        </TotalBonusStyle>
        <TotalScoreStyle>
          <div>
            <h3>Total</h3>
            <h3> {score.total}</h3>
          </div>
          <div>
            <button onClick={handleReset}>New Game</button>
          </div>
        </TotalScoreStyle>
      </ScoreLayout>
    </AppLayout>
  );
}

export default App;
