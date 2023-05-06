const main = document.querySelector('[data-js="bookmarks__main"]');

for (const cardId of state.bookmarks) {
  const cardData = state.cards.get(cardId);
  const card = createCard(cardId, cardData);
  const bookmarkButton = card.querySelector(`[data-js="bookmark__button-${cardId}"]`);
  bookmarkButton.addEventListener("click", () => card.remove());
  main.append(card);
}
