const items = [
  {
    id: 1,
    img: (src =
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"),
    title: "Avengers: Endgame",
    year: 2019,
  },

  {
    id: 2,
    img: (src =
      "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/622990.jpg"),
    title: "El Conjuro 2",
    year: 2016,
  },

  {
    id: 3,
    img: (src =
      "https://es.web.img2.acsta.net/pictures/14/04/30/11/55/592219.jpg"),
    title: "Harry Potter",
    year: 2001,
  },

  {
    id: 4,
    img: (src = "https://pics.filmaffinity.com/AaREC-273731015-large.jpg"),
    title: "REC",
    year: 2007,
  },

  {
    id: 5,
    img: (src =
      "https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"),
    title: "Shrek 2",
    year: 2004,
  },

  {
    id: 6,
    img: (src =
      "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"),
    title: "Rapidos y Furiosos",
    year: 2001,
  },
];

function genereteItemsHTML() {
  const itemsContainer = document.querySelector(".carteles ul");

  items.forEach((item) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const year = document.createElement("year");

    h2.textContent = item.title;
    img.src = item.img;
    img.alt = item.title;
    year.textContent = item.year;

    button.appendChild(h2);
    button.appendChild(img);
    button.appendChild(year);

    li.appendChild(button);
    itemsContainer.appendChild(li);
  });
}

function onload() {
  genereteItemsHTML();
}
