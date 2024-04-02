import { useState, useRef } from "react";

import style from "./select-options.module.css";

const SelectOptions = ({ optionsArray, handleSelect }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const leagueInput = useRef();

  const selectValue = (item) => {
    leagueInput.current.value = item.name;
    handleSelect && handleSelect(item.value);
    setOpenSelect(false);
  };

  const openOption = () => {
    setOpenSelect(!openSelect);
  };

  const listClass = `${style.list} ${openSelect && 'custom-scroll ' + style.visibility}`;
  const iconClass = `${style.icon} ${openSelect && style.active}`;
  
  return (
    <div className={style.wrapper}>
      <input 
        className={style.input}
        onClick={openOption}
        onBlur={() => setOpenSelect(false)}
        ref={leagueInput}
        type='text'
        placeholder='Выберите вид документа'
        readOnly
      />
      <span className={iconClass}>▼</span>
      <ul className={listClass}>
        {optionsArray.map((item, index) => (
          <li key={index} className={style.option} onClick={() => selectValue(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default SelectOptions;