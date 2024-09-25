import React from "react";

import wordIcon from '../../assets/images/MOWord.png';
import style from "./radio-group.module.css";

const RadioGroup = ({ optionsArray, group, handleChange, logic }) => {
  const handleRadioChange = (e) => {
    const val = e.target.value;
    const obj = optionsArray.find(item => item.value === val)?.properties;
    const grid = optionsArray.find(item => item.value === val)?.grid;
    handleChange && handleChange({...obj, grid, value: val});
    logic(true);
  };

  const styles = `${style.description} subtitle`

  if (optionsArray.length === 0) {
    return (
      <p className={styles}>
        В настоящее время в этом разделе нет готовых шаблонов документов. Но мы работаем над тем чтоб они появились.
      </p>
    );
  }
  
  return (
    <ul className={style.wrapper}>
      {optionsArray.map((item, index) => (
        <li key={index} className={style.point}>
          <input className={style.input} type='radio' name={group} value={item.value} onChange={handleRadioChange} />
          <label className={style.label}>
            <img src={wordIcon} alt="icon" width={32}/>   
            <span className={style.title}>{item.name}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default RadioGroup;
