import { useEffect, useState } from 'react';

import style from './text-input.module.css';

const TextInput = ({ defaultValue, handleCompanyName, label }) => {
  const [inputText, setInputText] = useState(defaultValue);

  const handleChange = (e) => {
    setInputText(e.target.value.slice(0, 25));
  };

  useEffect(() => {
    handleCompanyName && handleCompanyName(inputText);
  }, [inputText, handleChange])

  return (
    <div className={style.wrapper}>
      <label 
        htmlFor="textInput"
        className={style.label}
      >
        {label ? label : ''}
      </label>
      <input
        className={style.input}
        type="text"
        id="textInput"
        value={inputText}
        onChange={handleChange}
        maxLength={25}
      />
    </div>
  );
};

export default TextInput;