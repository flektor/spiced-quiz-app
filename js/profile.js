updateCounters();
updateThemeSwitch();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (localStorage.getItem("theme")) return;
  updateThemeSwitch();
});

function updateThemeSwitch() {
  const storedColor = localStorage.getItem("theme") ?? getOSColorTheme();
  const themeSwitch = document.querySelector('[data-js="theme-switch"]');
  themeSwitch.checked = storedColor === "dark";
}

function updateCounters() {
  const bookmarksElement = document.querySelector('[data-js="bookmarks-counter"]');
  const questionsElement = document.querySelector('[data-js="questions-counter"]');
  bookmarksElement.innerText = state.bookmarks.length;
  questionsElement.innerText = state.cards.size;
}

function changeTheme() {
  const color = localStorage.getItem("theme") ?? getOSColorTheme();
  const newColor = color === "dark" ? "light" : "dark";
  addTransitions();
  document.body.classList.remove("light", "dark");
  document.body.classList.add(newColor);
  localStorage.setItem("theme", newColor);

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
