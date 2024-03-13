import React, { useRef, useState } from "react";
import MyComponent from "../create-doc/create-doc";

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
        <div className='wrapper'>
          <div className='card'>
            <input className='input-radio' type='radio' name='card' value='basic' />
            <span className='check'></span>
            <label className='label'>
              <div className='title-card'>BASIC</div>
              <div className='price'>
                <span className='span'>$</span>
                15
                <span className='span'>/month</span>
              </div>
            </label>
          </div>
          <div className='card'>
            <input className='input-radio' type='radio' name='card' value='standart' />
            <span className='check'></span>
            <label className='label'>
              <div className='title-card'>STANDART</div>
              <div className='price'>
                <span className='span'>$</span>
                30
                <span className='span'>/month</span>
              </div>
            </label>
          </div>
          <div className='card'>
            <input className='input-radio' type='radio' name='card' value='premium' />
            <span className='check'></span>
            <label className='label'>
              <div className='title-card'>PREMIUM</div>
              <div className='price'>
                <span className='span'>$</span>
                60
                <span className='span'>/month</span>
              </div>
            </label>
          </div>   
        </div>
        
        <MyComponent />
        <footer className='footer'>
          <button className='button' type='button'>Создать документ</button>
        </footer>
      </div>
    </div>
  )
};

export default Modal;