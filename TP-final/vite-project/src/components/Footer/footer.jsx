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
            <span className="cle">characters: </span>
          </a>
          <a>
            <span className="cle">locations:</span>
          </a>
          <a>
            <span className="cle">episodes:</span>
          </a>
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
        <li className="redes_iconos">
          <Svggit />
        </li>
        <li className="redes_iconos">
          <Svgtw />
        </li>
        <li className="redes_iconos">
          <Svgcorazon />
        </li>
      </ul>
      <ul>
        <li>
          <span>
            ❮❯ by
            <a className="rulinrulon">Rulinrulon</a>
            2023
          </span>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
