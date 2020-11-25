const cardArray = [
  {
    name: "andy",
    img: "src/andy.jpg",
    num: 1,
  },
  {
    name: "andy",
    img: "src/andy.jpg",
    num: 2,
  },
  {
    name: "angela",
    img: "src/angela.jpg",
    num: 1,
  },
  {
    name: "angela",
    img: "src/angela.jpg",
    num: 2,
  },
  {
    name: "dwight",
    img: "src/dwight.jpg",
    num: 1,
  },
  {
    name: "dwight",
    img: "src/dwight.jpg",
    num: 2,
  },
  {
    name: "jim",
    img: "src/jim.jpg",
    num: 1,
  },
  {
    name: "jim",
    img: "src/jim.jpg",
    num: 2,
  },
  {
    name: "karen",
    img: "src/karen.jpg",
    num: 1,
  },
  {
    name: "karen",
    img: "src/karen.jpg",
    num: 2,
  },
  {
    name: "michael",
    img: "src/michael.jpg",
    num: 1,
  },
  {
    name: "michael",
    img: "src/michael.jpg",
    num: 2,
  },
  {
    name: "oscar",
    img: "src/oscar.jpg",
    num: 1,
  },
  {
    name: "oscar",
    img: "src/oscar.jpg",
    num: 2,
  },
  {
    name: "pam",
    img: "src/pam.jpg",
    num: 1,
  },
  {
    name: "pam",
    img: "src/pam.jpg",
    num: 2,
  },
];
cardArray.sort(() => 0.5 - Math.random());
let chosenCards = [];
let chosenCardsId = [];
function checkMatch() {
  const cards = document.querySelectorAll(".card");
  const firstClickId = chosenCardsId[0];
  const secondClickId = chosenCardsId[1];
  if (chosenCards[0] === chosenCards[1]) {
    cards[firstClickId].classList.add("match");
    cards[secondClickId].classList.add("match");
  } else {
    cards[firstClickId].setAttribute("src", "src/background.png");
    cards[secondClickId].setAttribute("src", "src/background.png");
  }
  chosenCards = [];
  chosenCardsId = [];
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  chosenCards.push(cardArray[cardId].name);
  chosenCardsId.push(cardId);
  this.setAttribute("src", `${cardArray[cardId].img}`);

  if (chosenCardsId.length === 2) {
    setTimeout(checkMatch, 300);
  }
}
const btn = document.querySelector(".btn");

const table = document.querySelector(".table");
const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");

    card.setAttribute("src", "src/background.png");
    card.setAttribute("data-id", i);
    card.classList.add("card");
    card.addEventListener("click", flipCard);
    table.appendChild(card);
  }
};
btn.addEventListener("click", () => {
  location.reload();
  return false;
});
createBoard();
