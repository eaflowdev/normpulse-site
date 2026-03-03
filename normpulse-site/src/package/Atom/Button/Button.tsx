import "./Button.css";
import "../../global.css";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button className={`button button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}