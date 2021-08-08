import React from 'react';
import { create } from 'react-test-renderer';
import Points, { ItemsContainerStyle } from '../Points';

import data from '../../mock/items.json';

describe('Points Component test suite', () => {
  const handleAddPoint = jest.fn();
  const component = create(<Points items={data} onAddPoint={handleAddPoint} />);

  it('should renders the the the 4 items', () => {
    expect(component.root.findByType(ItemsContainerStyle).props.children).toHaveLength(4);
  });

  it('should click on the first item', () => {
    component.root.findByType(ItemsContainerStyle).props.children[0].props.onClick();
    expect(handleAddPoint.mock.calls.length).toEqual(1);
  });
});
