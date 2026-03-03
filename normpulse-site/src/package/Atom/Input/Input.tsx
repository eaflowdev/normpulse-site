import "./Input.css";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  isPassword?: boolean;
}

export default function Input({
  className = "",
  hasError = false,
  isPassword = false,
  type,
}: InputProps) {
  const errorClass = hasError ? "input--error" : "";

  return (
    <input
      type={isPassword ? "password" : type || "text"}
      className={`input ${errorClass} ${className}`}
    />
  );
}