import React, { ChangeEventHandler } from 'react';
import './TextInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface TextInputProps {
  label: string;
  placeholder: string;
  showIcon?: boolean;
  inputVisible?: boolean;
  formRegister: {
    register: UseFormRegister<FieldValues>;
    controlName: string;
    validation: {};
  };
  validationErrors: FieldErrors<FieldValues>;
}

const TextInput = ({
  label = 'label',
  placeholder = 'placeholder',
  showIcon = false,
  inputVisible = true,
  formRegister,
  validationErrors
}: TextInputProps) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        {...formRegister?.register(
          formRegister?.controlName,
          formRegister?.validation
        )}
      />
      {showIcon ? (
        inputVisible ? (
          <FontAwesomeIcon icon={faEye} className="icon" />
        ) : (
          <FontAwesomeIcon icon={faEyeSlash} className="icon" />
        )
      ) : null}
      {validationErrors && validationErrors[formRegister?.controlName] && (
        <small className="validation-error">{label} is required.</small>
      )}
    </div>
  );
};

export default TextInput;
