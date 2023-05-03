loadTheme();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (localStorage.getItem("theme")) return;
  const newColor = event.matches ? "dark" : "light";
  setThemeColor(newColor);
});

function loadTheme() {
  const storedColor = localStorage.getItem("theme");
  const color = storedColor ?? getOSColorTheme();
  setThemeColor(color);
  return color;
}

function setThemeColor(color) {
  if (!["dark", "light"].includes(color)) return;

  document.body.classList.remove("light", "dark");
  document.body.classList.add(color);
}

function getOSColorTheme() {
  if (!window.matchMedia) return "light";

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}
