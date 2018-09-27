// takes top card (index 0)from pile and add it to played pile

const playNextCard = (pile, playedPile) => {
    console.log(playedPile);
    const playedCard = pile.shift();
    playedPile.push(playedCard);
    return { pile, playedPile };
}

export { playNextCard };