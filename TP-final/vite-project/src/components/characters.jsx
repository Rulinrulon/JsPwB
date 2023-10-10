import { useEffect, useState } from "react";
import { useCharacter } from "../hooks/useCharacter";
import { Character } from "./character";

export function Characters() {
  const { getAllCharacters, character } = useCharacter();

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <div className="tarjetas">
        {character.map((item, index) => (
          <Character character={item} index={index} />
        ))}
      </div>
    </>
  );
}
