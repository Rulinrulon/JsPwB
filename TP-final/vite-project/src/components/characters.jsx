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
      <div className="tarjetas">
        {characters.map((item, index) => (
          <div className="personaje" key={index}>
            <img className="img" src={item.image}></img>
            <div className="info">
              <div className="texto">
                <h2>{item.name}</h2>
                <h4>
                  {item.status} - {item.species}
                </h4>
              </div>
              <div className="texto">
                <p>Last known location:</p>
                <h3>{item.location.name}</h3>
              </div>
              <div className="texto">
                <p>First seen in:</p>
                <h3>{item.origin.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
