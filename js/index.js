const main = document.querySelector('[data-js="home__main"]');

for (const [cardId, carData] of state.cards) {
  const card = createCard(cardId, carData);
  main.append(card);
}
