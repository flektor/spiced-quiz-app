updateCounters();
updateThemeSwitch();

function updateThemeSwitch() {
  const isDarkMode = localStorage.getItem("data-bs-theme") === "dark";
  if (!isDarkMode) return;

  const themeSwitch = document.querySelector('[data-js="theme-switch"]');
  themeSwitch.checked = isDarkMode;
}

function updateCounters() {
  const bookmarksCounter = localStorage.getItem("bookmarks-counter") ?? 0;
  const questionsCounter = localStorage.getItem("questions-counter") ?? 0;
  const bookmarksElement = document.querySelector('[data-js="bookmarks-counter"]');
  const questionsElement = document.querySelector('[data-js="questions-counter"]');

  bookmarksElement.innerText = bookmarksCounter;
  questionsElement.innerText = questionsCounter;
}

function changeTheme() {
  const color = localStorage.getItem("data-bs-theme");
  const newColor = color === "dark" ? "light" : "dark";
  addTransitions();
  if (color) {
    document.body.classList.remove("data-bs-theme", color);
  }
  document.body.classList.add("data-bs-theme", newColor);
  localStorage.setItem("data-bs-theme", newColor);

  return newColor;
}

function addTransitions() {
  const alreadyAdded = document.body.classList.contains("transition");
  if (alreadyAdded) return;

  const elements = [
    document.body,
    document.getElementsByClassName("app__title")[0],
    ...document.getElementsByTagName("nav"),
    ...document.getElementsByTagName("path"),
    ...document.getElementsByTagName("circle"),
  ];

  for (let element of elements) {
    element.classList.add("transition");
  }
}
