import { useState, useRef } from "react";

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

  return (
    <div className='select-option'>
      <input 
        className='input'
        onClick={openOption}
        onBlur={() => setOpenSelect(false)}
        ref={leagueInput}
        id='league'
        type='text'
        placeholder='Выберите вид документа'
        readOnly
      />
      <span className={openSelect ? 'icon active' : 'icon'}>▼</span>
      <ul className={openSelect ? 'options custom-scroll active' : 'options'}>
        {optionsArray.map((item, index) => (
          <li onClick={() => selectValue(item)} key={index}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default SelectOptions;