export function Character(props) {
  const { character, index } = props;

  const { image, name, status, species, location, origin } = character;

  const getStatusColor = (status) => {
    if (status === "Alive") {
      return "vivo";
    }
    if (status === "Dead") {
      return "muerto";
    } else {
      return "desaparecido";
    }
  };

  return (
    <div className="personaje" key={index}>
      <img className="img" src={image}></img>
      <div className="info">
        <div className="texto">
          <h2>{name}</h2>
          <h4>
            <span className={`status_icon ${getStatusColor(status)}`}></span>
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
