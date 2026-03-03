import type { InputHTMLAttributes } from "react";
import Label from "../../Atom/Label/Label";
import Input from "../../Atom/Input/Input";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isPassword?: boolean;
}

export default function TextField({
  label,
  error,
  id,
  placeholder = "",
  isPassword = false,
}: FormFieldProps) {
  return (
    <div className="form-field">
      <Label>{label}</Label>

      <Input
        id={id}
        placeholder={placeholder}
        hasError={!!error}
        isPassword={isPassword}
      />

      {error && <span className="form-field-error">{error}</span>}
    </div>
  );
}