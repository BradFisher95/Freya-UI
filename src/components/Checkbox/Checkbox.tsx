import React from 'react';
import './Checkbox.scss';

export interface CheckboxProps {
  label: string;
  placeholder: string;
  showIcon: boolean;
  inputVisible: boolean;
}

const Checkbox = ({
  label = 'label',
  placeholder = 'placeholder',
  showIcon = false,
  inputVisible = true
}: CheckboxProps) => {
  return (
    <div className="checkbox-wrapper">
      <input className="inp-cbx" id="morning" type="checkbox" />
      <label className="cbx" htmlFor="morning">
        <span>
          <svg width="12px" height="10px">
            <use xlinkHref="#check"></use>
          </svg>
        </span>
        <span>Keep me signed in</span>
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
