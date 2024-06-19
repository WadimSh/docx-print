import React from "react";

import style from "./create-button.module.css"

const CreateButton = ({ handleDoc, label, disabled = false }) => {

  return (
    <button 
      className={style.button} 
      type="button" 
      onClick={handleDoc}
      disabled={disabled}
    >
      {label ? label : ''}
    </button>
  )
};

export default CreateButton;