import { useState } from "react";

import style from "./check-box.module.css";

const CheckBox = ({ 
  label,       
  checked,     
  onChange,    
}) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);

    if (onChange) {
      onChange(newCheckedValue);
    }
  };

  const checkClass = `${style.check} ${isChecked ? style.active : ''}`.trim();

  return (
    <label className={style.wrapper}>
      <span className={style.container}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={style.input}
        />
        <div className={checkClass}>
          <strong>&#10003;</strong>
        </div>
      </span>
      <span className={style.label}>
        {label ? label : ''}
      </span>
    </label>
  );
};

export default CheckBox;