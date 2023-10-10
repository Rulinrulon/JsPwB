export function Character(props) {
  const { character, index } = props;

  const { image, name, status, species, location, origin } = character;

  return (
    <div className="personaje" key={index}>
      <img className="img" src={image}></img>
      <div className="info">
        <div className="texto">
          <h2>{name}</h2>
          <h4>
            {status} - {species}
          </h4>
        </div>
        <div className="texto">
          <p>Last known location:</p>
          <h3>{location.name}</h3>
        </div>
        <div className="texto">
          <p>First seen in:</p>
          <h3>{origin.name}</h3>
        </div>
      </div>
    </div>
  );
}
