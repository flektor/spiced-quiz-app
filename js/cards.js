function createCard(cardId, data) {
  const card = document.createElement("div");
  card.classList.add("question__card");
  card.dataset.js = `card-${cardId}`;

  const bookmarkButton = document.createElement("input");
  bookmarkButton.classList.add("bookmark__button");
  bookmarkButton.dataset.js = `bookmark__button-${cardId}`;
  bookmarkButton.type = "checkbox";
  bookmarkButton.addEventListener("click", (event) => onBookmarkPressed(event, cardId));
  bookmarkButton.checked = data.bookmarked;
  card.append(bookmarkButton, icons.bookmark());

  const question = document.createElement("h2");
  question.textContent = data.question;
  card.append(question);

  const showHideButton = document.createElement("input");
  showHideButton.classList.add("show-hide__button");
  showHideButton.type = "checkbox";

  card.append(showHideButton);

  const answer = document.createElement("div");
  answer.classList.add("question__anwser", "code");
  answer.textContent = data.answer;
  card.append(answer);

  const tags = document.createElement("div");
  tags.classList.add("tags");
  card.append(tags);

  const tag = document.createElement("span");
  tag.textContent = data.tag;
  tags.append(tag);

  return card;
}

function onBookmarkPressed(event, cardId) {
  const isChecked = event.target.checked;

  if (isChecked) {
    if (state.bookmarks.includes(cardId)) return;
    state.bookmarks.push(cardId);
    return;
  }

  const index = state.bookmarks.indexOf(cardId);
  if (index < 0) return;
  state.bookmarks.splice(index, 1);
}
