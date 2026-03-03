import React, { type LabelHTMLAttributes } from 'react';
import './Label.css';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, className, ...props }) => {
  return (
    <label className={`atom-label ${className || ''}`} {...props}>
      {children}
    </label>
  );
};

export default Label;