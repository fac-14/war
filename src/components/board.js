import React from 'react';
import createDeck from '../utils/getData';
import { playNextCard, sayWhoWon, war } from '../utils/logic';
import Player from './player';
import './board.css';

export default class Board extends React.Component {
  state = {
    player1: {
      pile: [],
      playedPile: [],
    },
    player2: {
      pile: [],
      playedPile: [],
    },
    speedMode: false,
  };
  componentDidMount = () => {
    createDeck().then(data =>
      this.setState({
        player1: { pile: data.pile1, playedPile: [] },
        player2: { pile: data.pile2, playedPile: [] },
      })
    );
  };
  speedMode = () => {
    if (this.state.speedMode) {
      this.setState({ speedMode: false });
      clearInterval(this.timer);
    } else {
      this.setState({ speedMode: true });
      this.timer = setInterval(() => this.playTurn(10), 20);
    }
  };
  playTurn = speed => {
    this.setState(prevState => ({
      player1: playNextCard(
        prevState.player1.pile,
        prevState.player1.playedPile
      ),
      player2: playNextCard(
        prevState.player2.pile,
        prevState.player2.playedPile
      ),
      winner: sayWhoWon(
        this.state.player1.playedPile,
        this.state.player2.playedPile
      )
    }));

    setTimeout(() => {
      const winner = sayWhoWon(
        this.state.player1.playedPile,
        this.state.player2.playedPile
      );
      if (winner === 1) {
        this.setState(prevState => ({
          winner,
          player1: {
            pile: prevState.player1.pile.concat(
              prevState.player1.playedPile.concat(prevState.player2.playedPile)
            ),
            playedPile: [],
          },
          player2: {
            pile: prevState.player2.pile,
            playedPile: [],
          },
        }));
      } else if (winner === 2) {
        this.setState(prevState => ({
          winner,
          player2: {
            pile: prevState.player2.pile.concat(
              prevState.player1.playedPile.concat(prevState.player2.playedPile)
            ),
            playedPile: [],
          },
          player1: {
            pile: prevState.player1.pile,
            playedPile: [],
          },
        }));
      } else if (winner === 0) {
        console.log("it's a war!");
        this.setState(prevState => war(prevState));
      }
    }, speed);
  };
  render = () => {
    return (
      <main id="board">
        <section>
          <Player
            playerName="Player"
            score={this.state.player1.pile.length}
            playedPile={this.state.player1.playedPile}
            winner={this.state.winner}
          />
          <Player
            playerName="Computer"
            score={this.state.player2.pile.length}
            playedPile={this.state.player2.playedPile}
            winner={this.state.winner}
          />
        </section>
        <section>
          <button id="play" onClick={() => this.playTurn(3000)}>
            Play
        </button>
          <button id="speed" onClick={this.speedMode}>
            {this.state.speedMode ? 'Pause' : 'Speed Mode!'}
          </button>
          <p id="winnerTxt">
            {this.state.winner
              ? `Player ${this.state.winner} wins!`
              : "IT'S A WAR!"}
          </p>
        </section>
      </main>
    );
  };
}
