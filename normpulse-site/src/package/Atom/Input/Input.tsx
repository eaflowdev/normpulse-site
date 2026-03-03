import React, { type InputHTMLAttributes } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
  hasError?: boolean;
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ className, hasError, placeholder, isPassword }) => {
  const errorClass = hasError ? 'atom-input--error' : '';
  
  return (
    <input 
    type={isPassword ? 'password' : 'text'}
    placeholder={placeholder || ''}
      className={`atom-input ${errorClass} ${className || ''}`}
    />
  );
};

export default Input;