import React, { memo } from 'react';
import styled from 'styled-components';
import { ScoreItem } from '../types';

const ScoreHeaderStyle = styled.section`
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid grey;
  width: 300px;
  color: rgb(255, 255, 255);
  background-color: rgb(134, 76, 191);
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

  td,
  th {
    width: 33.33%;
  }

  td {
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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const TotalBonusStyle = styled.section`
  padding: 0 15px;
  border-top: 1px solid grey;
`;

const TotalScoreStyle = styled.section`
  padding: 0 15px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid grey;
`;

const ResetButtonStyle = styled.button`
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  color: rgb(255, 255, 255);
  background-color: rgb(134, 76, 191);
  cursor: pointer;

  &:hover {
    background-color: rgb(134, 76, 251);
  }
`;

interface ScoreProps {
  gameItems: ScoreItem[];
  bonus: number;
  total: number;
  onReset(): void;
}

const ScoreView = memo(({ gameItems, bonus, total, onReset }: ScoreProps): JSX.Element => {
  function handleReset() {
    onReset();
  }

  return (
    <>
      <ScoreHeaderStyle>
        <h1>Player Items</h1>
      </ScoreHeaderStyle>
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
            {gameItems.map(({ name, quantity, score }) =>
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
        <h3>Bonuses {bonus}</h3>
      </TotalBonusStyle>
      <TotalScoreStyle>
        <div>
          <h3>Total</h3>
          <h2> {total}</h2>
        </div>
        <div>
          <ResetButtonStyle onClick={handleReset}>New Game</ResetButtonStyle>
        </div>
      </TotalScoreStyle>
    </>
  );
});

ScoreView.displayName = 'ScoreView';
export default ScoreView;
