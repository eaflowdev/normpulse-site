import "./Navbar.css";
import "../../global.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Atom/Button/Button";
import NavbarItem from "../../Atom/NavbarItem/NavbarItem";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-link">
        <div className="navbar-logo">NormPulse</div>
      </Link>
      <div className="navbar-links">
        <div onClick={handleHomeClick}>
          <NavbarItem>Accueil</NavbarItem>
        </div>
        <NavbarItem>Produits</NavbarItem>
        <NavbarItem>Catégorie</NavbarItem>
        <Button variant="primary" onClick={handleLoginClick}>Connexion</Button>
      </div>
    </nav>
  );
}
