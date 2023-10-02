import React from 'react';
import './TextInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export interface TextInputProps {
  label: string;
  placeholder: string;
  showIcon: boolean;
  inputVisible: boolean;
}

const TextInput = ({
  label = 'label',
  placeholder = 'placeholder',
  showIcon = false,
  inputVisible = true
}: TextInputProps) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input placeholder={placeholder} />
      {showIcon ? (
        inputVisible ? (
          <FontAwesomeIcon icon={faEye} className="icon" />
        ) : (
          <FontAwesomeIcon icon={faEyeSlash} className="icon" />
        )
      ) : null}
    </div>
  );
};

export default TextInput;
