const form = document.querySelector('[data-js="question__form"]');
const questionTextarea = document.querySelector('[data-js="question__textarea"]');
const answerTextarea = document.querySelector('[data-js="answer__textarea"]');
const cards = document.querySelector('[data-js="cards"]');
const questionLengthCounterElement = document.querySelector('[data-js="question-counter"]');
const answerLengthCounterElement = document.querySelector('[data-js="answer-counter"]');

questionTextarea.addEventListener("input", () => {
  const number = 150 - questionTextarea.value.length;
  questionLengthCounterElement.textContent = number + " characters left";
});

answerTextarea.addEventListener("input", () => {
  const number = 150 - answerTextarea.value.length;
  answerLengthCounterElement.textContent = number + " characters left";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form));
  const card = createCard(data);
  cards.append(card);
});

function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("question__card");

  const bookmarkButton = document.createElement("input");
  bookmarkButton.classList.add("bookmark__button");
  bookmarkButton.type = "checkbox";
  bookmarkButton.append(bookmarkIcon());
  card.append(bookmarkButton);

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

function bookmarkIcon() {
  const svg = document.createElement("svg");
  svg.classList.add("icon", "bookmark__icon");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const path = document.createElement("path");

  path.setAttribute("stoke", "#000");
  path.setAttribute("stoke-width", "1.5");
  path.setAttribute(
    "d",
    "M5 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C6.9 2 7.6 2 9 2h6c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C19 3.9 19 4.6 19 6v13.208c0 1.056 0 1.583-.217 1.856a1 1 0 0 1-.778.378c-.349.002-.764-.324-1.593-.976L12 17l-4.411 3.466c-.83.652-1.245.978-1.594.976a1 1 0 0 1-.778-.378C5 20.791 5 20.264 5 19.208V6z"
  );
  svg.append(path);
  return svg;
}
