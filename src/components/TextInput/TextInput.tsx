import React from 'react';
import './TextInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye } from '@fortawesome/free-solid-svg-icons';

export interface TextInputProps {
  label: string;
  placeholder: string;
  showIcon: boolean;
}

const TextInput = ({
  label = 'label',
  placeholder = 'placeholder',
  showIcon = false
}: TextInputProps) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input placeholder={placeholder} />
      {showIcon ? <FontAwesomeIcon icon={faEye} className="icon" /> : null}
    </div>
  );
};

export default TextInput;
