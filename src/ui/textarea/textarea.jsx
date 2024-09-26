import { useEffect, useState } from 'react';
import style from './textarea.module.css';

const Textarea = ({ defaultValue, handleName, label, maxLength = 300, placeholder }) => {
  const [inputText, setInputText] = useState(defaultValue);

  const handleChange = (e) => {
    setInputText(e.target.value.slice(0, +maxLength));
  };

  useEffect(() => {
    handleName && handleName(inputText);
  }, [inputText])

  return (
    <div className={style.wrapper}>
      <label 
        htmlFor="textInput"
        className={style.label}
      >
        {label ? label : ''}
      </label>
      <textarea
        className={style.textarea}
        id="textInput"
        value={inputText}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder={placeholder || ""}
      />
    </div>
  );
};

export default Textarea;