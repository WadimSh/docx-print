import React from "react";

import style from "./notify-message.module.css";

const NotifyMessage = () => {

  return (
    <div className={style.wrapper}>
      <p className={style.text}>
        Для корректного отображения штрих-кодов в создаваемом документа установитье этот шрифт -
        <a className={style.link} href={window.location.origin + '/locals/LibreBarcodeEAN13Text-Regular.ttf'} download='LibreBarcodeEAN13Text-Regular.ttf'> LibreBarcodeEAN13</a>
      </p>
    </div>
  );
};

export default NotifyMessage;