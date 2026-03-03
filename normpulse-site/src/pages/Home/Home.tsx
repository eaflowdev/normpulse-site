import "./Home.css";
import Card from "../../package/Molecule/Card/Card";
import caseinImage from "../../assets/casein.png";
import creatineImage from "../../assets/creatine.png";
import carnitineImage from "../../assets/l-carnitine.png";
import preworkoutImage from "../../assets/preworkout.png";

export default function Home() {
  const products = [
    {
      id: 1,
      image: caseinImage,
      title: "Caséine Micellaire",
      price: 39.99,
    },
    {
      id: 2,
      image: creatineImage,
      title: "Créatine Monohydrate",
      price: 24.99,
    },
    {
      id: 3,
      image: carnitineImage,
      title: "L-Carnitine",
      price: 29.99,
    },
    {
      id: 4,
      image: preworkoutImage,
      title: "Pre-Workout",
      price: 34.99,
    },
  ];

  const handleAddToCart = (productTitle: string) => {
    console.log(`${productTitle} ajouté au panier`);
  };

  return (
    <div className="home">
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
        <div className="home-products-grid">
          {products.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              onAddToCart={() => handleAddToCart(product.title)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
