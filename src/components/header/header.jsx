import { useContext } from "react";
import { MainContext } from "../../contexts/contexts";

const Header = ({ type }) => {
  const data = useContext(MainContext);

  const text = () => {
    const remainder = data.length % 10;
    const isExclusion = data.length % 100 === 11;
    return remainder === 1 && !isExclusion ? 'товар' :
           remainder >= 2 && remainder <= 4 && !isExclusion ? 'товара' :
           'товаров';
  };

  const subtext = () => {
    const types = {
      'new': 'из оптового каталога',
      'cash': 'из мелкооптового каталога',
      'fr': 'из каталога франшизы'
    };
    return types[type] || 'неизвестного типа';
  }
    
  return (
    <header>
      <div>
        <h1 className="title">Преобразование данных в формат документа Word</h1>
        <div>
          <p className="subtitle">
            выбрано&nbsp;<span>{data.length}</span>&nbsp;{text()}&nbsp;
            {data.length !== 0 && <span>{subtext()}</span>}
          </p>
        </div>
      </div>
    </header>
  )
};

export default Header;