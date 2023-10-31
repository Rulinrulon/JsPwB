import { Svgcorazon } from "../../utils/svgcorazon";
import { Svgdeploys } from "../../utils/svgdeploys";
import { Svggit } from "../../utils/svggit";
import { Svgpowered } from "../../utils/svgpowered";
import { Svgtw } from "../../utils/svgtw";

function Footer() {
  return (
    <footer>
      <ul className="datos">
        <li>
          <a>
            <span className="characters">characters: </span>
          </a>
          <a>locations:</a>
          <a>episodes:</a>
        </li>
      </ul>
      <ul className="server">
        <li>server status</li>
        <li className="server_status">
          <span></span>
        </li>
      </ul>
      <ul className="deploys_powered">
        <Svgdeploys />
        <Svgpowered />
      </ul>
      <ul className="redes">
        <div className="redes_iconos">
          <Svggit />
        </div>
        <div className="redes_iconos">
          <Svgtw />
        </div>
        <div className="redes_iconos">
          <Svgcorazon />
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
