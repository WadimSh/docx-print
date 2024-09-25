import React from "react";
import style from "./img-preview.module.css";

const ImgPreview = ({ optionsArray, value }) => {
  const selectedItem = optionsArray.find((item) => item.value === value);

  if (!selectedItem) {
    return null;
  }

  return (
    <>
      <p className={style.preview_description}>{selectedItem.description}</p>
      <img className={style.preview_image} src={selectedItem.image_preview} alt={selectedItem.value} />
    </>
  );
};

export default ImgPreview;
