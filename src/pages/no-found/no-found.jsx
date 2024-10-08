import React from "react";

import image from "../../assets/images/no-found.png";

const NoFound = () => {

  return (
    <div className="nofound">
      <div>
        <img src={image} alt="no-found" />
        <p>Данных в приложения не передано.</p>
      </div>
      <button 
        type="button" 
        onClick={() => window.open('https://new.sharik.ru', '_self')}
      >Вернуться на сайт</button>
    </div>
  );
};

export default NoFound;