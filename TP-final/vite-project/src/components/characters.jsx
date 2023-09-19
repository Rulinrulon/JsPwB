import { useEffect, useState } from "react";

export function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <>
      {characters.map((item, index) => (
        <li key={index}>
          <img className="img" src={item.image}></img>
          <h3>{item.name}</h3>
          <p>
            {item.status} - {item.species}
          </p>
          <p>Last known location:</p>
          <p>{item.location.name}</p>
          <p>First seen in:</p>
          <p>{item.origin.name}</p>
        </li>
      ))}
    </>
  );
}
