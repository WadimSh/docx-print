import React from 'react';

const ToggleButtonsGroup = ({ selectedOption, onOptionChange }) => {
  return (
    <div className="toggle-buttons-group">
      <button
        className={1 === selectedOption ? 'active' : ''}
        onClick={() => onOptionChange(1)}
      >
        1
      </button>
      <button
        className={2 === selectedOption ? 'active' : ''}
        onClick={() => onOptionChange(2)}
      >
        2
      </button>
      <div></div>
    </div>
  );
};

export default ToggleButtonsGroup;