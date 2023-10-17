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
          <a>characters: </a>
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
        <Svggit />
        <Svgtw />
        <Svgcorazon />
      </ul>
    </footer>
  );
}

export default Footer;
