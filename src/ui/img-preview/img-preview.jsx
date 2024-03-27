import React from "react";

const ImgPreview = ({ optionsArray, value }) => {
  
  return (
    <>
      {optionsArray.map((item, index) => (
        value === item.value && <img key={index} src={item.imege_preview} alt={item.value} width='45%' />        
      ))}
    </>
  );
};

export default ImgPreview;
