import React from "react";

import style from "./create-button.module.css"

const CreateButton = ({ handleDoc }) => {

  return (
    <button 
      className={style.button} 
      type="button" 
      onClick={handleDoc}
    >
      Создать документ
    </button>
  )
};

export default CreateButton;