import "./Home.css";
import Navbar from "../../package/Molecule/Navbar/Navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <section className="home-hero">
        <h1>Transformez Votre Corps</h1>
        <p>
          Découvrez notre gamme complète de produits de musculation pour
          atteindre vos objectifs de fitness et de performance.
        </p>
      </section>
      <section className="home-content">
        <h2>Nos Produits Premium</h2>
        <p>Des équipements de qualité professionnelle pour tous les niveaux</p>
      </section>
    </div>
  );
}
