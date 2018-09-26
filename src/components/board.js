import React from 'react';
import createDeck from '../utils/getData';

export default class Board extends React.Component {
  state = {
    player1: {
      pile: [1, 2, 3, 4, 5],
      playedPile: [],
      score: 0,
    },
    player2: {
      pile: [1, 2, 3, 4, 5],
      playedPile: [],
      score: 0,
    },
  };
  componentDidMount = () => {
    createDeck().then(data => console.log(data));
  };
  playGame = () => {
    this.setState({ player1: { pile: [1, 2, 3] } });
  };
  render = () => {
    return (
      <main id="board">
        <div>Player 1: {this.state.player1.pile.length} </div>
        <div>Player 2: {this.state.player2.pile.length} </div>
        <button id="play" onClick={this.playGame}>
          Play!
        </button>
      </main>
    );
  };
}
