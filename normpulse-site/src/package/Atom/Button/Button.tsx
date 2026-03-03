import "./Button.css";
import "../../global.css";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button className={`button button-${variant}`}>
      {children}
    </button>
  );
}