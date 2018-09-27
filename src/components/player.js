import React from 'react';
import backCard from '../cardBack.png';

const Player = ({ playerName, score, playedPile, winner }) => {
  const card = playedPile.slice(-1)[0];
  return (
    <div>
      <div>
        {playerName}: {score}
      </div>
      {/* score bigger 0 ? then show back of card */}
      {score ? <img src={backCard} /> : <div className="emptySpace" />}
      {card ? <img src={card.image} /> : <div className="emptySpace" />}
    </div>
  );
};

export default Player;
