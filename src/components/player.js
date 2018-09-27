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
                {/* score bigger 0 ? then show back of card */}
                {this.state.score ? <img src={backCard} /> : <div className="emptySpace" />}
                {this.state.card ? <img src={this.state.card.image} /> : <div className="emptySpace" />}
            </div>
        )
    }
}