import { Svgfondo } from "../../utils/svgfondo";
import { Svgtop } from "../../utils/svgtop";

function Header() {
  return (
    <header>
      <div className="logo_y_botones">
        <Svgtop />
        <div className="botones">
          <button className="docs_about">Docs</button>
          <button className="docs_about">About</button>
          <button className="support">SUPPORT US</button>
        </div>
      </div>
      <div className="titulo">
        <h1>The Rick and Morty API</h1>
      </div>
      <div className="fondo">
        <Svgfondo />
      </div>
    </header>
  );
}

export default Header;
