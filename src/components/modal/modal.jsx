import React, { useRef, useState } from "react";

//import SmallPrices from "../../template/small-prices/small-prices";
//import createEncode from "../../utils/create-encode/create-encode";
//import transformArray from "../../utils/transform-array/transform-array";
//import { data } from "../../context/data";

const Modal = () => {

  //const newData = transformArray(data);
  
  //const addKeyToObjects = (arr, key, value) => {
  //  return arr.map(obj => ({ ...obj, [key]: value }));
  //};
  //const code = createEncode('5414391027136');
  
  const optionsArray = [
    'коммерческое предложение',
    'ценники для магазина',
    'какието документ',
    'ещё документы',
    'немного еще документов',
    'и еще документики'
  ]

  const [openSelect, setOpenSelect] = useState(false);
  const leagueInput = useRef();

  const selectValue = (e) => {
    leagueInput.current.value = e.target.outerText;
    setOpenSelect(false);
  };

  const openOption = () => {
    setOpenSelect(!openSelect);
  };

  return (
    <div className='overlay'>
      <div className='popup'>
        
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
        <a href={window.location.origin + '/locals/LibreBarcodeEAN13Text-Regular.ttf'}>ссылка</a>
        {/* <SmallPrices data={newData} />  */}   
        
      </div>
    </div>
  )
};

export default Modal;