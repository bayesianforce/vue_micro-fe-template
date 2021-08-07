import React from 'react';
import styled from 'styled-components';

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
  flex: auto;
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
  return (
    <AppLayout>
      <PointsLayout>
        <PointsHeaderLayout>
          <h1>Kahoot points</h1>
        </PointsHeaderLayout>
        <ItemsLayout>
          <ItemStyle>
            <label>A</label>
          </ItemStyle>
          <ItemStyle>
            <label>B</label>
          </ItemStyle>
          <ItemStyle>
            <label>C</label>
          </ItemStyle>
          <ItemStyle>
            <label>D</label>
          </ItemStyle>
          <ItemStyle>
            <label>E</label>
          </ItemStyle>
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
              <tr>
                <td>
                  <ItemCell>A</ItemCell>
                </td>
                <td>3</td>
                <td>200</td>
              </tr>
              <tr>
                <td>
                  <ItemCell>A</ItemCell>
                </td>
                <td>3</td>
                <td>200</td>
              </tr>
              <tr>
                <td>
                  <ItemCell>A</ItemCell>
                </td>
                <td>3</td>
                <td>200</td>
              </tr>
              <tr>
                <td>
                  <ItemCell>A</ItemCell>
                </td>
                <td>3</td>
                <td>200</td>
              </tr>
              <tr>
                <td>A</td>
                <td>3</td>
                <td>200</td>
              </tr>
              <tr>
                <td>A</td>
                <td>3</td>
                <td>200</td>
              </tr>
              <tr>
                <td>A</td>
                <td>3</td>
                <td>200</td>
              </tr>
              <tr>
                <td>A</td>
                <td>3</td>
                <td>200</td>
              </tr>
              <tr>
                <td>A</td>
                <td>3</td>
                <td>200</td>
              </tr>
              <tr>
                <td>A</td>
                <td>4</td>
                <td>200</td>
              </tr>
              <tr>
                <td>A</td>
                <td>4</td>
                <td>200</td>
              </tr>
              <tr>
                <td>A</td>
                <td>4</td>
                <td>200</td>
              </tr>
            </tbody>
          </ItemsScoreStyle>
        </DetailsScoreStyle>
        <TotalBonusStyle>
          <h3>Bonuses 30</h3>
        </TotalBonusStyle>
        <TotalScoreStyle>
          <div>
            <h3>Total</h3>
            <h3> 140</h3>
          </div>
          <div>
            <button>New Game</button>
          </div>
        </TotalScoreStyle>
      </ScoreLayout>
    </AppLayout>
  );
}

export default App;
