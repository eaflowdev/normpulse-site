import "./Navbar.css";
import "../../global.css";
import Button from "../../Atom/Button/Button";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">NormPulse</div>
      <div className="navbar-links">
        <Button variant="secondary">Accueil</Button>
        <Button variant="secondary">Produits</Button>
        <Button variant="secondary">Catégorie</Button>
        <Button variant="primary">Connexion</Button>
      </div>
    </nav>
  );
}
