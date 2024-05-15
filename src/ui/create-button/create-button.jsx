import React from "react";

import style from "./create-button.module.css"

const CreateButton = ({ handleDoc, label }) => {

  return (
    <button 
      className={style.button} 
      type="button" 
      onClick={handleDoc}
      disabled={false}
    >
      {label ? label : ''}
    </button>
  )
};

export default CreateButton;