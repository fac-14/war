const checkResponse = response => {
  if (response.status !== 200) {
    return console.log(`Error with request ${response.status}`);
  }
  return response.json();
};

const getData = url => {
  return fetch(url)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getData failed ${err}`);
    });
};

const getDeckId = () => {
  return getData(
    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
  ).then(data => data.deck_id);
};

const getCards = id => {
  return getData(
    `https://deckofcardsapi.com/api/deck/${id}/draw/?count=52`
  ).then(response => response.cards);
};

const makeTwoPiles = cards => {
  return {
    pile1: cards.slice(0, 26),
    pile2: cards.slice(26, 52),
  };
};

const createDeck = () => {
  return getDeckId()
    .then(getCards)
    .then(makeTwoPiles);
};

export default createDeck;
