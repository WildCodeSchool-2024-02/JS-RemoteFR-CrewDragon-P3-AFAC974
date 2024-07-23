import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo_afac.png";

function Header() {
  return (
    <header className="header">
      <div className="section2">
        <Link to="/" className="video-background">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="right">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Galerie">Galerie</Link>
            </li>

            <li>
              <Link to="/Artiste">Artiste</Link>
            </li>
            <li>
              <Link to="/login">Connexion</Link>
            </li>
            <li>
              <Link to="/register">Inscription</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
