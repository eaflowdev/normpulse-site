import React, { type InputHTMLAttributes } from 'react';
import Label from '../Atom/Label/Label';
import Input from '../Atom/Input/Input';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  placeholder?: string;
  isPassword?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, error, id, placeholder, isPassword }) => {
  return (
    <div className="molecule-form-field">
      <Label htmlFor={id}>
        {label}
      </Label>
      
      <Input 
        id={id}
        placeholder={placeholder || ''} 
        hasError={!!error}
        isPassword={isPassword}
      />
      
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default FormField;