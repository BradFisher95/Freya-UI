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
  onClick = () => {
    console.log('Please pass in a click event handler');
  }
}: ButtonProps) => {
  return (
    <button type={type} className={`button ${buttonStyle}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
