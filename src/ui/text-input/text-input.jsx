import { useEffect, useState } from 'react';

import style from './text-input.module.css';

const TextInput = ({ defaultValue, handleCompanyName }) => {
  const [inputText, setInputText] = useState(defaultValue);

  const handleChange = (e) => {
    setInputText(e.target.value.slice(0, 25));
  };

  useEffect(() => {
    handleCompanyName && handleCompanyName(inputText);
  }, [inputText, handleChange])

  return (
    <div className={style.textInput}>
      <label htmlFor="textInput">Введите текст <br/> <span style={{ fontSize: '10px' }}>(от 2 до 25 символов)</span></label>
      <input
        className={style.input}
        type="text"
        id="textInput"
        value={inputText}
        onChange={handleChange}
        minLength={2}
        maxLength={25}
      />
    </div>
  );
};

export default TextInput;