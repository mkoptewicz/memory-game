const cardArray = [
  {
    name: "andy",
    img: "src/andy.jpg",
  },
  {
    name: "andy",
    img: "src/andy.jpg",
  },
  {
    name: "angela",
    img: "src/angela.jpg",
  },
  {
    name: "angela",
    img: "src/angela.jpg",
  },
  {
    name: "dwight",
    img: "src/dwight.jpg",
  },
  {
    name: "dwight",
    img: "src/dwight.jpg",
  },
  {
    name: "jim",
    img: "src/jim.jpg",
  },
  {
    name: "jim",
    img: "src/jim.jpg",
  },
  {
    name: "karen",
    img: "src/karen.jpg",
  },
  {
    name: "karen",
    img: "src/karen.jpg",
  },
  {
    name: "michael",
    img: "src/michael.jpg",
  },
  {
    name: "michael",
    img: "src/michael.jpg",
  },
  {
    name: "oscar",
    img: "src/oscar.jpg",
  },
  {
    name: "oscar",
    img: "src/oscar.jpg",
  },
  {
    name: "pam",
    img: "src/pam.jpg",
  },
  {
    name: "pam",
    img: "src/pam.jpg",
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
    setTimeout(checkMatch, 500);
  }
}

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
createBoard();
