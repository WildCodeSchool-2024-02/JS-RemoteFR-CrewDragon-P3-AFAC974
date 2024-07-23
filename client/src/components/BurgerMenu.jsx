import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../styles/BurgerMenu.css";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <Menu isOpen={isOpen} onStateChange={(state) => setIsOpen(state.isOpen)}>
      <Link className="menu-item" to="/" onClick={handleMenuClose}>
        Home
      </Link>
      <Link className="menu-item" to="/Artiste" onClick={handleMenuClose}>
        Artiste
      </Link>
      <Link className="menu-item" to="/Galerie" onClick={handleMenuClose}>
        Galerie
      </Link>
      <Link className="menu-item" to="/login" onClick={handleMenuClose}>
        Connexion
      </Link>
      <Link className="menu-item" to="/register" onClick={handleMenuClose}>
        Inscription
      </Link>
    </Menu>
  );
}

export default BurgerMenu;
