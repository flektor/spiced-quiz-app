async function loadSvg(element, path) {
  const response = await fetch(path);
  if (response.status !== 200) return false;
  try {
    const svg = await response.text();
    element.innerHTML = svg;
    return true;
  } catch (error) {
    console.error.bind(console);
  }
}

function loadSvgIcons() {
  const elements = document.getElementsByClassName("icon");
  for (let elem of elements) {
    loadSvg(elem, `../svg/${elem.dataset.js}`);
  }
}
