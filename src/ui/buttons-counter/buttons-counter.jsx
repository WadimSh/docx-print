import { useEffect, useState } from 'react';

const ButtonsCounter = ({ handleProfit }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleChange = (e) => {
    setCount(parseInt(e.target.value) || 0);
    
  };

  useEffect(() => {
    handleProfit && handleProfit(count);
  }, [handleIncrement, handleDecrement, handleChange])

  return (
    <div>
      <span>Ваша наценка,% </span>
      <div>
        <button onClick={handleDecrement}>-</button>
        <input type="number" value={count} onChange={handleChange} />
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default ButtonsCounter;