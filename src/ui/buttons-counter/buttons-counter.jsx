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
    if (!isNaN(value) || value === "-" || value === "") {
      setCount(parseInt(value));
    }
  };

  const checkForNaN = (value) => {
    if (isNaN(value)) {
      return 0;
    } else {
      return value;
    }
  };

  useEffect(() => {
    handleProfit && handleProfit(checkForNaN(count));
  }, [count])

  return (
    <div className={style.wrapper}>
      <span>{label ? label : ''}</span>
      <div className={style.container}>
        <button className={style.button} onClick={handleDecrement}>-</button>
        <input className={style.input} type="number" value={count} onChange={handleChange} />
        <button className={style.button} onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ButtonsCounter;