import React from "react";

const ImgPreview = ({ optionsArray, value }) => {
  
  return (
    <>
      {optionsArray.map((item) => (
        value === item.value && <>
          <p style={{fontFamily: 'var(--font-family)', fontWeight: '400', fontSize: '14px', margin: '0 30px 20px 0'}}>{item.description}</p>
          <img src={item.imege_preview} alt={item.value} width='300px' />
        </>        
      ))}
    </>
  );
};

export default ImgPreview;
