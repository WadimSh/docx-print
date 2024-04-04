import { useEffect, useState } from 'react';

import style from './buttons-counter.module.css';

const ButtonsCounter = ({ handleProfit, defaultValue, label }) => {
  const [count, setCount] = useState(defaultValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "-") {
      setCount(-1);
    } else if (value === "" || value === " " || isNaN(value)) {
      setCount(0);
    } else {
      setCount(parseInt(value));
    }
  };

  useEffect(() => {
    handleProfit && handleProfit(count);
  }, [count])

  return (
    <div className={style.wrapper}>
      <span>{label ? label : ''}</span>
      <div className={style.container}>
        <button className={style.button} onClick={handleDecrement}>-</button>
        <input className={style.input} type="text" value={count} onChange={handleChange} />
        <button className={style.button} onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ButtonsCounter;