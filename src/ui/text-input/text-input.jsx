import { useState } from 'react';

const TextInput = ({ handleCompanyName }) => {
  const [inputText, setInputText] = useState('АО "Европа уно трейд"');

  const handleChange = (event) => {
    setInputText(event.target.value.slice(0, 25));
    handleCompanyName && handleCompanyName(event.target.value.slice(0, 25))
  };

  return (
    <div>
      <label htmlFor="textInput">Введите текст (от 2 до 25 символов):</label>
      <input
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