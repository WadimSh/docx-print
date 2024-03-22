import React from "react";

import ToggleButtonsGroup from "../../ui/toggle-buttons-group/toggle-buttons-group";
import DownloadImage from "../img-link/img-link";

const Header = ({ itemsCount, catalogType }) => {
  const imageUrl = "https://new.sharik.ru/media/cache/bc/e1/bce16e37b3bfc3a3c27bb965997b52d6.jpg";
  const corsUrl = "https://cors-anywhere.herokuapp.com/" + imageUrl;
  let imageBase64 = "";
  fetch(corsUrl)
  .then(response => response.blob())
  .then(blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      imageBase64 = reader.result; // Сохраняем изображение в переменной imageBase64
      console.log("Image loaded as base64:", imageBase64);
      // Дальнейшая обработка изображения в формате base64
    };
  })
  .catch(error => console.error('Error fetching image:', error));

  return (
    <header>
      <div>
        <h1>Преобразование данных в формат документа Word</h1>
        <div>
          <p>
            выбрано
            <span>{itemsCount}</span>
            товаров
            <span>{catalogType && `из ${catalogType}`}</span>
          </p>
        </div>
      </div>
      <div>
        
        
      </div>
    </header>
  )
};

export default Header;