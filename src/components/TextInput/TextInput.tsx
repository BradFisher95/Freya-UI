import React, { ChangeEventHandler } from 'react';
import './TextInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export interface TextInputProps {
  label: string;
  placeholder: string;
  showIcon: boolean;
  inputVisible: boolean;
  onInputChange: ChangeEventHandler<HTMLInputElement>;
}

const TextInput = ({
  label = 'label',
  placeholder = 'placeholder',
  showIcon = false,
  inputVisible = true,
  onInputChange = (e) => {
    console.log(e?.target.value, '- Please pass inputChangeHandler');
  }
}: TextInputProps) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input placeholder={placeholder} onChange={onInputChange} />
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
