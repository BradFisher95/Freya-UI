import React from 'react';
import './Checkbox.scss';

export interface CheckboxProps {
  label: string;
  onClick?: () => void;
}

const Checkbox = ({ label = 'label', onClick }: CheckboxProps) => {
  return (
    <div className="checkbox-wrapper">
      <input
        className="inp-cbx"
        id="morning"
        type="checkbox"
        onClick={onClick}
      />
      <label className="cbx" htmlFor="morning">
        <span>
          <svg width="12px" height="10px">
            <use xlinkHref="#check"></use>
          </svg>
        </span>
        <span>{label}</span>
      </label>
      <svg className="inline-svg">
        <symbol id="check" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg>
    </div>
  );
};

export default Checkbox;
