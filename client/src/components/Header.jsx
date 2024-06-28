import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo_afac.png";

function Header() {
  return (
    <header className="header">
      <div className="section2">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="right">
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Artiste">Artiste</Link>
            </li>
            <li>
              <Link to="/Galerie">Galerie</Link>
            </li>
            <li className="connex">
              <Link to="/Connexion">Connexion</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
