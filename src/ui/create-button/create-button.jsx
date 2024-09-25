import React from "react";
import style from "./create-button.module.css"

const CreateButton = ({ handleDoc, labelCreate, labelDisabled, disabled = false }) => {

  return (
    <button 
      className={style.button} 
      type="button" 
      onClick={handleDoc}
      disabled={disabled}
    >
      {disabled ? labelDisabled : labelCreate}
    </button>
  )
};

export default CreateButton;