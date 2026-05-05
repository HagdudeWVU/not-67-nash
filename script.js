const words = ["yes", "no"];
function pickWord() {
  const index = Math.floor(Math.random() * words.length);
  document.getElementById('word').innerText = fruits[index];
}
