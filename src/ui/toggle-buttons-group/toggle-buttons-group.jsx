import React from 'react';

const ToggleButtonsGroup = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div className="toggle-buttons-group">
      {options.map((option) => (
        <button
          key={option}
          className={option === selectedOption ? 'active' : ''}
          onClick={() => onOptionChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonsGroup;