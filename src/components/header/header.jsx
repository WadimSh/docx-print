import React from "react";

const Header = ({ itemsCount, catalogType }) => {
  
  return (
    <header className="header">
      <div>
        <h1>Преобразование данных в формат документа Word</h1>
        <div>
          <p>
            выбрано&nbsp;
            <span>{itemsCount || 0}</span>
            &nbsp;товаров
            <span>{catalogType && `из ${catalogType}`}</span>
          </p>
        </div>
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
    </header>
  )
};

export default Header;