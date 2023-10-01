import React from 'react';
import './Button.scss';

export interface ButtonProps {
  type?: 'primary' | 'secondary';
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ type = 'primary', label, onClick }: ButtonProps) => {
  return (
    <button type="button" className={`button ${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
