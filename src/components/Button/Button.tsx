import React from 'react';
import './Button.scss';

export interface ButtonProps {
  type?: 'button' | 'submit';
  buttonStyle: 'primary' | 'secondary';
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  type = 'button',
  label = 'Button',
  buttonStyle = 'primary',
  onClick
}: ButtonProps) => {
  return (
    <button type={type} className={`button ${buttonStyle}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
