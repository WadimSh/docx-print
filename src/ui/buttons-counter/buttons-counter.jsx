import { useEffect, useState } from 'react';

import style from './buttons-counter.module.css';

const ButtonsCounter = ({ handleProfit }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleChange = (e) => {
    setCount(parseInt(e.target.value));
    
  };

  useEffect(() => {
    handleProfit && handleProfit(count);
  }, [handleIncrement, handleDecrement, handleChange])

  return (
    <div className={style.buttonsCounter}>
      <span>Ваша наценка, % </span>
      <div className={style.counter}>
        <button className={style.button} onClick={handleDecrement}>-</button>
        <input className={style.input} type="number" value={count} onChange={handleChange} />
        <button className={style.button} onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ButtonsCounter;