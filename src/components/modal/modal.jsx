import React, { useRef, useState } from "react";

const Modal = () => {
  const optionsArray = [
    'коммерческое предложение',
    'ценники для магазина',
  ]

  const [openSelect, setOpenSelect] = useState(false);
  const leagueInput = useRef();

  const selectValue = (e) => {
    leagueInput.current.value = e.target.outerText;
    setOpenSelect(false);
  };

  const openOption = () => {
    setOpenSelect(true);
  };

  return (
    <div className='overlay'>
      <div className='popup'>
        <header className='header'>
          <h3 className='title'>Print document-docx</h3>
          <span className='clouse'>×</span>
        </header>
        <div className='select-option'>
          <input 
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
      </div>
    </div>
  )
};

export default Modal;