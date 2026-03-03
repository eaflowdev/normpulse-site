import "./CardPrice.css";

interface CardPriceProps {
  price: number;
  currency?: string;
}

export default function CardPrice({ price, currency = "€" }: CardPriceProps) {
  return (
    <div className="card-price">
      <span className="card-price-amount">{price}</span>
      <span className="card-price-currency">{currency}</span>
    </div>
  );
}
