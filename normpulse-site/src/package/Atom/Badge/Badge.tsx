import "./Badge.css";
import "../../global.css";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ternary";
  icon?: string;
}

export default function Badge({
  children,
  variant = "primary",
  icon = "star.svg"
}: BadgeProps) {
  return (
    <div className={`badge badge-${variant}`}>
      <img src={`/src/assets/${icon}`} alt="" />
      {children}
    </div>
  );
}