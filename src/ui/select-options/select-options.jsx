import { useState, useRef } from "react";

const SelectOptions = ({ optionsArray, handleSelect }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const leagueInput = useRef();

  const selectValue = (e) => {
    leagueInput.current.value = e.target.outerText;
    handleSelect && handleSelect(leagueInput.current.value);
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
      <ul className={openSelect ? 'options active' : 'options'}>
        {optionsArray.map((item, index) => (
          <li onClick={selectValue} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default SelectOptions;