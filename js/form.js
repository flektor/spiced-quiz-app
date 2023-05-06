const form = document.querySelector('[data-js="question__form"]');
const questionTextarea = document.querySelector('[data-js="question__textarea"]');
const answerTextarea = document.querySelector('[data-js="answer__textarea"]');
const cardsContainer = document.querySelector('[data-js="cards"]');
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

  const cardData = Object.fromEntries(new FormData(form));
  state.cards.set(cardData);
  form.reset();
  questionTextarea.focus();
});
