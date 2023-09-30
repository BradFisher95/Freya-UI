import React from 'react';
import './Button.scss';

export interface ButtonProps {
  type?: 'primary' | 'secondary';
  textColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  type = 'primary',
  size = 'medium',
  onClick,
  label
}: ButtonProps) => {
  return (
    <button type="button" className={`button ${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
