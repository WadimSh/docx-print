import { useContext } from "react";
import { MainContext } from "../../contexts/contexts";

const Header = ({ type, log }) => {
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
        <h1 className="title">
          Преобразование данных в формат документа Word 
          <span style={{fontSize: '12px', verticalAlign: 'top', color: 'var(--color-accent)'}}> Beta</span>
        </h1>
        <div>
          {!log.event ? log.error !== '' ? <p className="subtitle error">{log.error}</p> : 
          <p className="subtitle">Пожалуйста, подождите, идёт загрузка данных…</p> :
          <p className="subtitle">
            выбрано&nbsp;<span>{data.length}</span>&nbsp;{text()}&nbsp;
            {data.length !== 0 && <span>{subtext()}</span>}
          </p>}
        </div>
      </div>
      <div style={{ height: '100%', paddingTop: '36px' }}>
        <a href="https://pxl.ru.altkraft.com/form?form=7sGW2395fA7V29r1WBjWb6DgJTJeDtpk67GN1m3geRRaEnYHfdANrimG8i7Vei7vnrgdeeifLD4EqpTJPNu3PxQc">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.125 5.25C3.50368 5.25 3 5.75368 3 6.375V17.625C3 18.2463 3.50368 18.75 4.125 18.75H19.875C20.4963 18.75 21 18.2463 21 17.625V6.375C21 5.75368 20.4963 5.25 19.875 5.25H4.125ZM1.5 6.375C1.5 4.92525 2.67525 3.75 4.125 3.75H19.875C21.3247 3.75 22.5 4.92525 22.5 6.375V17.625C22.5 19.0747 21.3247 20.25 19.875 20.25H4.125C2.67525 20.25 1.5 19.0747 1.5 17.625V6.375Z" fill="#21272A"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.65802 7.03958C4.91232 6.71262 5.38353 6.65372 5.71049 6.90802L12 11.7999L18.2896 6.90802C18.6165 6.65372 19.0877 6.71262 19.342 7.03958C19.5964 7.36654 19.5375 7.83775 19.2105 8.09205L12.4605 13.342C12.1897 13.5527 11.8104 13.5527 11.5396 13.342L4.78958 8.09205C4.46262 7.83775 4.40372 7.36654 4.65802 7.03958Z" fill="#21272A"/>
          </svg>
        </a>
      </div>
    </header>
  )
};

export default Header;