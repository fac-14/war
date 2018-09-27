import React from 'react';
import createDeck from '../utils/getData';
import { playNextCard } from '../utils/logic';
import Player from "./player"
import "./board.css";

export default class Board extends React.Component {
  state = {
    player1: {
      pile: [],
      playedPile: []
    },
    player2: {
      pile: [],
      playedPile: []
    }
  }
  componentDidMount = () => {
    createDeck().then(data => this.setState({ player1: { pile: data.pile1, playedPile: [] }, player2: { pile: data.pile2, playedPile: [] } }));
  };
  playGame = () => {
    this.setState(prevState => ({ player1: playNextCard(prevState.player1.pile, prevState.player1.playedPile), player2: playNextCard(prevState.player2.pile, prevState.player2.playedPile) }));
  };
  render = () => {
    return (
      <main id="board">
        <Player playerName="Player" score={this.state.player1.pile.length} playedPile={this.state.player1.playedPile} />
        <Player playerName="Computer" score={this.state.player2.pile.length} playedPile={this.state.player2.playedPile} />
        <button id="play" onClick={this.playGame}>
          Play!
        </button>
      </main>
    );
  };
}
