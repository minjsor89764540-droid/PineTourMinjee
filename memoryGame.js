const cards = [
  "🐶",
  "🐸",
  "🦊",
  "🐱",
  "🐼",
  "🐶",
  "🐵",
  "🦊",
  "🐱",
  "🐵",
  "🐸",
  "🐼",
];
let first = null;
let second = null;
function flip(index) {
  if (first === null) {
    first = index;
    const card = document.getElementById("card" + index);
    card.textContent = cards[index];
    return;
  }
  if (second === null) {
    second = index;
    const card = document.getElementById("card" + index);
    card.textContent = cards[index];
    if (cards[first] === cards[second]) {
      first = null;
      second = null;
    }
  } else {
    const firstCard = document.getElementById("card" + first);
    const secondCard = document.getElementById("card" + second);
    firstCard.textContent = "❓";
    secondCard.textContent = "❓";
  }
}
