import React from 'react';
import backCard from '../cardBack.png'

export default class Player extends React.Component {
    state = {
        name: this.props.playerName,
        score: this.props.score,
        card: this.props.playedPile ? this.props.playedPile.pop() : {}
    };
    componentWillReceiveProps = nextProps => {
        this.setState({
            score: nextProps.score,
            card: nextProps.playedPile ? nextProps.playedPile[nextProps.playedPile.length - 1] : {}
        })
    };
    render() {
        return (
            <div>
                <div>{this.state.name}: {this.state.score}</div>
                <img src={this.state.card ? this.state.card.image : backCard}></img>
            </div>
        )
    }
}