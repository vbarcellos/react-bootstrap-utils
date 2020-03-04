import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext, handleInputChange } from './form-helpers';

export function FormRadio({ id, name, required, checkedValue, valueLabel, inline }) {
  const formState = useContext(FormContext);

  function onChange(e) {
    const { name, value } = handleInputChange(e);

    formState.update(name, value);
  }

  const value = formState.getValue(name) || false;

  return (
    <div className={`custom-control custom-radio ${inline ? 'custom-control-inline' : ''}`}>
      <input
        {...{ required, name, id }}
        type="radio"
        className="custom-control-input"
        onChange={onChange}
        checked={value === checkedValue}
        value={checkedValue}
      />
      <label className="custom-control-label" htmlFor={id}>
        {valueLabel}
      </label>
    </div>
  );
}

FormRadio.defaultProps = {
  inline: false,
};

FormRadio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  valueLabel: PropTypes.string,
  inline: PropTypes.bool,
};
