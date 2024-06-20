import React from "react";

const ImgPreview = ({ optionsArray, value }) => {
  
  return (
    <>
      {optionsArray.map((item, index) => (
        value === item.value && <>
        <p key={index} style={{fontFamily: 'var(--font-family)', fontWeight: '400', fontSize: '14px', marginBottom: '20px'}}>{item.description}</p>
        <img key={index} src={item.imege_preview} alt={item.value} width='45%' /></>        
      ))}
    </>
  );
};

export default ImgPreview;
