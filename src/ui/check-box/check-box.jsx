import { useState } from "react";

import style from "./check-box.module.css";

const CheckBox = ({ 
  label,       
  checked = false,     
  onChange,    
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);

    if (onChange) {
      onChange(newCheckedValue);
    }
  };

  const checkClass = `${style.check} ${isChecked ? style.active : ''}`.trim();

  return (
    <div className={style.wrapper}>
      <span className={style.container}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={style.input}
        />
        <div className={checkClass}>
          &#10003;
        </div>
      </span>
      <span className={style.label} onClick={handleCheckboxChange}>
        {label || ''}
      </span>
    </div>
  );
};

export default CheckBox;