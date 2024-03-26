import React from "react";

const RadioGroup = ({ optionsArray, group, handleChange }) => {
  const handleRadioChange = (e) => {
    const val = e.target.value;
    const obj = optionsArray.find(item => item.value === val)?.properties;
    handleChange && handleChange({...obj, value: val});
  };

  return (
      <ul className='radio-group custom-scroll'>
          {optionsArray.map((item, index) => (
              <li key={index} className='button'>
                  <input className='input-radio' type='radio' name={group} value={item.value} onChange={handleRadioChange} />
                  <label className='label'>
                      <span className='title'>{item.name}</span>
                  </label>
              </li>
          ))}
      </ul>
  );
};

export default RadioGroup;
