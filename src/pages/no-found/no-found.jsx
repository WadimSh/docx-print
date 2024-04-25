import React from "react";

import image from "../../assets/images/no-found.png";

const NoFound = () => {

  return (
    <div>
      <img src={image} alt="no-found" />
      <p>Данных в приложения не передано.</p>
      <button type="button" onClick={() => window.history.back()}>Вернуться на new.sharik.ru</button>
    </div>
  );
};

export default NoFound;