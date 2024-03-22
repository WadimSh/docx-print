import React from "react";

import ToggleButtonsGroup from "../../ui/toggle-buttons-group/toggle-buttons-group";
import DownloadImage from "../img-link/img-link";

const Header = ({ itemsCount, catalogType }) => {
  
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