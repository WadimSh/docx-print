import React from "react";

import style from "./notify-message.module.css";

const NotifyMessage = () => {

  return (
    <div className={style.wrapper}>
      <p className={style.text}>
      Чтобы штрих-коды корректно отображались в создаваемом документе, установите специальный шрифт -
        <a className={style.link} href={window.location.origin + '/locals/LibreBarcodeEAN13Text-Regular.ttf'} download='LibreBarcodeEAN13Text-Regular.ttf'> LibreBarcodeEAN13</a>
      </p>
    </div>
  );
};

export default NotifyMessage;