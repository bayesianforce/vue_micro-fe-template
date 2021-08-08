import React from 'react';
import { create } from 'react-test-renderer';
import ScoreView, {
  ItemsScoreStyle,
  ResetButtonStyle,
  TotalBonusStyle,
  TotalScoreStyle,
} from '../Score';

describe('Score Component test suite', () => {
  const handleReset = jest.fn();
  const score = {
    gameItems: [
      { quantity: 2, score: 4, name: 'T', unitPoints: 20 },
      { quantity: 3, score: 5, name: 'Y', unitPoints: 25 },
    ],
    bonus: 123,
    total: 456,
  };

  const component = create(<ScoreView {...score} onReset={handleReset} />);

  it('should renders the the Bonus component with value 123', () => {
    expect(component.root.findByType(TotalBonusStyle).findByType('h3').props.children[1]).toEqual(
      123,
    );
  });

  it('should renders the the Total component with value 456', () => {
    expect(component.root.findByType(TotalScoreStyle).findByType('h2').props.children[1]).toEqual(
      456,
    );
  });

  it('should renders the the Score table with 2 children', () => {
    expect(
      component.root.findByType(ItemsScoreStyle).findByType('tbody').props.children,
    ).toHaveLength(2);
  });

  it('should click on game reset button', () => {
    component.root.findByType(ResetButtonStyle).props.onClick();

    expect(handleReset.mock.calls.length).toEqual(1);
  });
});
