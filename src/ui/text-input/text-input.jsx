import { useEffect, useState } from 'react';

import style from './text-input.module.css';

const TextInput = ({ defaultValue, handleName, label, maxLength = 50, placeholder }) => {
  const [inputText, setInputText] = useState(defaultValue);

  const handleChange = (e) => {
    setInputText(e.target.value.slice(0, +maxLength));
  };

  useEffect(() => {
    handleName && handleName(inputText);
  }, [inputText, handleName])

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
        maxLength={maxLength}
        placeholder={placeholder || ""}
      />
    </div>
  );
};

export default TextInput;