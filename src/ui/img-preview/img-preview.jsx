import React from "react";
import style from "./img-preview.module.css";

const ImgPreview = ({ optionsArray, value }) => {
  
  return (
    <>
      {optionsArray.map((item) => (
        value === item.value && <>
          <p className={style.preview_desription}>{item.description}</p>
          <img className={style.preview_image} src={item.imege_preview} alt={item.value} />
        </>        
      ))}
    </>
  );
};

export default ImgPreview;
