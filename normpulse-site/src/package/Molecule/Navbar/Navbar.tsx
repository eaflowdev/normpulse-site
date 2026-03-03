import "./Navbar.css";
import "../../global.css";
import Button from "../../Atom/Button/Button";
import NavbarItem from "../../Atom/NavbarItem/NavbarItem";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">NormPulse</div>
      <div className="navbar-links">
        <NavbarItem>Accueil</NavbarItem>
        <NavbarItem>Produits</NavbarItem>
        <NavbarItem>Catégorie</NavbarItem>
        <Button variant="primary">Connexion</Button>
      </div>
    </nav>
  );
}
