import { useState, useRef, useEffect } from "react";

import style from "./select-options.module.css";

const SelectOptions = ({ optionsArray, handleSelect, optionSelected, placeholder }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const leagueInput = useRef();

  useEffect(() => {
    if(optionSelected) {
      leagueInput.current.value = optionSelected;
    }
  }, [optionSelected]);

  const selectValue = (item) => {
    leagueInput.current.value = item.name;
    handleSelect && handleSelect(item);
    setOpenSelect(false);
  };

  const openOption = () => {
    setOpenSelect(!openSelect);
  };

  const listClass = `${style.list} ${openSelect ? style.visibility : ''}`.trim();
  const iconClass = `${style.icon} ${openSelect ? style.active : ''}`.trim();
  
  return (
    <div className={style.wrapper}>
      <input 
        className={style.input}
        onClick={openOption}
        onBlur={() => setOpenSelect(false)}
        ref={leagueInput}
        type='text'
        placeholder={placeholder ? placeholder : ''}
        readOnly
      />
      <span className={iconClass}>
        <svg 
          width="16" 
          height="10" 
          viewBox="0 0 16 10" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M2.34315 0.757355L0.92894 2.17157L7.99999 9.24266L15.0711 2.1716L13.6568 0.757384L8.00001 6.41422L2.34315 0.757355Z" 
          />
        </svg>
      </span>
      <ul className={listClass}>
        {optionsArray.map((item, index) => (
          <li 
            key={index} 
            className={style.option} 
            onClick={() => selectValue(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default SelectOptions;