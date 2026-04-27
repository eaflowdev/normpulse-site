import "./Input.css";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  hasError?: boolean;
  isPassword?: boolean;
}

export default function Input({
  className = "",
  hasError = false,
  isPassword = false,
  placeholder = "",
  type,
}: InputProps) {
  const errorClass = hasError ? "input--error" : "";

  return (
    <input
    placeholder={placeholder}
      type={isPassword ? "password" : type || "text"}
      className={`input ${errorClass} ${className}`}
    />
  );
}