const state = {
  cards: loadCardsFromLocalStorage(),
  bookmarks: loadBookmarksFromLocalStorage(),
};

state.cards.__super__set = state.cards.set;
state.cards.set = function (cardData) {
  const cardId = genarateUID(this);
  this.__super__set(cardId, cardData);
  return cardId;
};

for (let i = state.bookmarks.length - 1; i >= 0; i--) {
  const cardId = state.bookmarks[i];
  if (!cardId) {
    state.bookmarks.splice(i, 1);
    continue;
  }
  const card = state.cards.get(cardId);
  card.bookmarked = true;
}

onbeforeunload = () => {
  if (state.cards.size === 0) return;

  localStorage.setItem("card-ids", JSON.stringify([...state.cards.keys()]));

  for (const [cardId, cardData] of state.cards) {
    const { bookmarked, ...rest } = cardData;
    localStorage.setItem(`card.${cardId}`, JSON.stringify(rest));
  }

  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

function loadCardsFromLocalStorage() {
  const cardsData = new Map();
  const storedCardIdsRaw = localStorage.getItem("card-ids");
  if (!storedCardIdsRaw) return cardsData;

  const storedCardIds = JSON.parse(storedCardIdsRaw);
  if (!storedCardIds) return cardsData;

  for (const cardId of storedCardIds) {
    const cardDataRaw = localStorage.getItem(`card.${cardId}`);
    if (!cardDataRaw) continue;
    cardsData.set(cardId, JSON.parse(cardDataRaw));
  }
  return cardsData;
}

function loadBookmarksFromLocalStorage() {
  const bookmarksRaw = localStorage.getItem("bookmarks");
  if (!bookmarksRaw) return [];
  return JSON.parse(bookmarksRaw);
}

function genarateUID(map) {
  let cardId;
  do {
    cardId = Math.random().toString(16).substring(2);
  } while (map.has(cardId));
  return cardId;
}
