import React from 'react';
import './TextInput.scss';

export interface TextInputProps {
  label: string;
  placeholder: string;
}

const TextInput = ({ label, placeholder }: TextInputProps) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
