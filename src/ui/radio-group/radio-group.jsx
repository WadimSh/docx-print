import React from "react";

const RadioGroup = ({ optionsArray, group, handleChange }) => {
  const handleRadioChange = (e) => {
    const val = e.target.value;
    //const arr = optionsArray.filter(item => item.value === val).map(item => item.properties);
    handleChange && handleChange(optionsArray.find(item => item.value === val)?.properties);
  };

  return (
      <ul className={`options ${group ? 'active' : ''}`}>
          {optionsArray.map((item, index) => (
              <li key={index}>
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
