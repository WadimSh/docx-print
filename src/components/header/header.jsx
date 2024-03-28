import { useContext } from "react";

import { MainContext } from "../../contexts/contexts";

const Header = () => {
  const data = useContext(MainContext);
  
  return (
    <header>
      <div>
        <h1>Преобразование данных в формат документа Word</h1>
        <div>
          <p>
            выбрано&nbsp;
            <span>{data.length}</span>
            &nbsp;товаров&nbsp;
            <span>{`из оптового каталога`}</span>
          </p>
        </div>
      </div>
      <div style={{ display: 'none' }}>
        <button></button>
        <button></button>
      </div>
    </header>
  )
};

export default Header;