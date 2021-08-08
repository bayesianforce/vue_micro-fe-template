import React, { memo } from 'react';
import styled from 'styled-components';
import { Item } from '../types';

const PointsHeaderStyle = styled.section`
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid grey;
  color: rgb(255, 255, 255);
  background-color: rgb(134, 76, 191);
`;

export const ItemsContainerStyle = styled.article`
  overflow: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 10px;
  cursor: pointer;
  font-size: 32px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(134, 76, 251);
  }
`;

interface PointsProps {
  items: Item[];
  onAddPoint(name: string): void;
}

const Points = memo(({ items, onAddPoint }: PointsProps): JSX.Element => {
  function handleAddItem(itemName: string) {
    onAddPoint(itemName);
  }

  return (
    <>
      <PointsHeaderStyle>
        <h1>Kahoot points</h1>
      </PointsHeaderStyle>
      <ItemsContainerStyle>
        {items.map(({ name }) => (
          <ItemStyle key={name} onClick={() => handleAddItem(name)}>
            {name}
          </ItemStyle>
        ))}
      </ItemsContainerStyle>
    </>
  );
});

Points.displayName = 'Points';
export default Points;
