import "./Card.css";
import CardTitle from "../../Atom/CardTitle/CardTitle";
import CardPrice from "../../Atom/CardPrice/CardPrice";
import Button from "../../Atom/Button/Button";

interface CardProps {
  image: string;
  title: string;
  price: number;
  onAddToCart?: () => void;
}

export default function Card({ image, title, price, onAddToCart }: CardProps) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <CardTitle>{title}</CardTitle>
        <CardPrice price={price} />
        <Button variant="secondary" onClick={onAddToCart}>
          Ajouter au panier
        </Button>
      </div>
    </div>
  );
}
