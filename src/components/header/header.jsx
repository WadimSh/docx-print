import { useContext } from "react";

import { MainContext } from "../../contexts/contexts";
import { ImageIcon, ListIcon } from "../../ui/icons";

const Header = () => {
  const data = useContext(MainContext);
  let text = 'товаров';

  if (data.length % 10 === 1 && data.length !== 11) {
    text = 'товар';
  } else if (data.length % 10 === 2 || data.length % 10 === 3 || data.length % 10 === 4) {
    text = 'товара';
  }
  
  return (
    <header>
      <div>
        <h1>Преобразование данных в формат документа Word</h1>
        <div>
          <p>
            выбрано&nbsp;
            <span>{data.length}</span>
            &nbsp;{text}&nbsp;
            <span>{`из оптового каталога`}</span>
          </p>
        </div>
      </div>
      <div style={{ display: 'block' }}>
        <button>
          <ListIcon 
            size={28}
            color="var(--color-text)"
          />
        </button>
        <button>
          <ImageIcon 
            size={28}
            color="var(--color-text)"
          />
        </button>
      </div>
    </header>
  )
};

export default Header;