// takes top card (index 0)from pile and add it to played pile

const playNextCard = (pile, playedPile) => {
  const playedCard = pile.shift();
  playedPile.push(playedCard);
  return { pile, playedPile };
};

const values = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  JACK: 11,
  QUEEN: 12,
  KING: 13,
  ACE: 14,
};

const sayWhoWon = (playedPile1, playedPile2) => {
  const card1 = playedPile1.slice(-1)[0];
  const card2 = playedPile2.slice(-1)[0];
  if (values[card1.value] > values[card2.value]) {
    return 1;
  } else if (values[card2.value] > values[card1.value]) {
    return 2;
  } else {
    return 0;
  }
};

const war = prevState => {
  const player1 = playNextCard(
    prevState.player1.pile,
    prevState.player1.playedPile
  );
  const player2 = playNextCard(
    prevState.player2.pile,
    prevState.player2.playedPile
  );
  return {
    player1,
    player2,
  };
};

export { playNextCard, sayWhoWon, war };
