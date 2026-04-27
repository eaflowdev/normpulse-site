import "./Label.css";
import type { LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export default function Label({
  children,
  className = "",
  ...props
}: LabelProps) {
  return (
    <label className={`label ${className}`} {...props}>
      {children}
    </label>
  );
}