import React from "react";

import style from "./radio-group.module.css";

const RadioGroup = ({ optionsArray, group, handleChange }) => {
  const handleRadioChange = (e) => {
    const val = e.target.value;
    const obj = optionsArray.find(item => item.value === val)?.properties;
    handleChange && handleChange({...obj, value: val});
  };

  const classWrapper = style.wrapper + ' custom-scroll';

  return (
      <ul className={classWrapper}>
          {optionsArray.map((item, index) => (
              <li key={index} className={style.point}>
                  <input className={style.input} type='radio' name={group} value={item.value} onChange={handleRadioChange} />
                  <label className={style.label}>
                      <span className={style.title}>{item.name}</span>
                  </label>
              </li>
          ))}
      </ul>
  );
};

export default RadioGroup;
