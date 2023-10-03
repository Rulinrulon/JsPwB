import { Svgtop } from "../../utils/svgtop";

function Header() {
  return (
    <header>
      <div className="botones">
        <Svgtop />
        <button className="docs_about">Docs</button>
        <button className="docs_about">About</button>
        <button className="support">SUPPORT US</button>
      </div>
      <div className="titulo">
        <h1>The Rick and Morty API</h1>
      </div>
    </header>
  );
}

export default Header;
