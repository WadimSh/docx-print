import React from 'react';

import style from './toggle-buttons.module.css';

const ToggleButtons = ({ selectedOption, onOptionChange, firstIcon, secondIcon }) => {
  const firstClass = `${style.button} ${selectedOption ===  1 && style.active}`;
  const secondClass = `${style.button} ${selectedOption ===  2 && style.active}`;

  return (
    <div className={style.wrapper}>
      <button
        type='button'
        className={firstClass}
        onClick={() => onOptionChange(1)}
      >
        {firstIcon}
      </button>
      <button
        type='button'
        className={secondClass}
        onClick={() => onOptionChange(2)}
      >
        {secondIcon}
      </button>
      <div></div>
    </div>
  );
};

export default ToggleButtons;