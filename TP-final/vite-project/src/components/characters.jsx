import { useEffect, useState } from "react";
import { useCharacter } from "../hooks/useCharacter";

export function Characters() {
  const { getAllCharacters, character } = useCharacter();

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <div className="tarjetas">
        {character.map((item, index) => (
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
