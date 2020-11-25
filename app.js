document.addEventListener("DOMContentLoaded", () => {
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

  const table = document.querySelector(".table");
  const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "src/background.png");
      card.setAttribute("data-id", i);
      card.classList.add('card')
      table.appendChild(card);
    }
  };
  createBoard();
});
