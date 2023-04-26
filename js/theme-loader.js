loadTheme();

function loadTheme() {
  const defaultOSColor = document.getElementsByTagName("html")[0].getAttribute("data-bs-theme");
  const storedColor = localStorage.getItem("data-bs-theme");

  const color = storedColor ?? defaultOSColor;

  if (!["dark", "light"].includes(color)) return;

  document.body.classList.add("data-bs-theme", color);

  return color;
}
