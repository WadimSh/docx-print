import React from "react";

import { data } from "../../contexts/data";

const Header = () => {
    
  return (
    <header className="header">
      <div>
        <h1>Преобразование данных в формат документа Word</h1>
        <div>
          <p>
            выбрано&nbsp;
            <span>{data.length || 0}</span>
            &nbsp;товаров&nbsp;
            <span>{`из оптового каталога`}</span>
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