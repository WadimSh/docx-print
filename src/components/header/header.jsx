import { useContext, useState } from "react";
//import { saveAs } from 'file-saver';

import { MainContext } from "../../contexts/contexts";
import ToggleButtonsGroup from "../../ui/toggle-buttons-group/toggle-buttons-group";
import { ImageIcon, ListIcon } from "../../ui/icons";

const Header = () => {

//
  //const doc =`<html>
  //  <head>
  //    <title>My HTML</title>
  //  </head>
  //  <body>
  //    <div>Привет!</div>
  //   </body>
  //  </html>`;
  //const saveHtml = (html, filename) => {
  //  const blob = new Blob([html], { type: "text/html" });
  //  saveAs(blob, filename);
  //};
//
  //const handleSaveHtml = () => {
  //  saveHtml(doc, "index.html");
  //};
  //const [file, setFile] = useState(null);
  //const handleFileChange = (event) => {
  //  setFile(event.target.files[0]);
  //};
  //const handleSaveFile = () => {
  //  saveAs(file, 'newFileName.jpg');
  //};
//
  //<div>
  //  <input type="file" onChange={handleFileChange} />
  //  <button onClick={handleSaveFile}>Save File As</button>
  //</div>

  const data = useContext(MainContext);
  const [buttonToggle, setButtonToggle] = useState(1);

  let text = 'товаров';
  if (data.length % 10 === 1 && data.length !== 11) {
    text = 'товар';
  } else if (data.length % 10 === 2 || data.length % 10 === 3 || data.length % 10 === 4) {
    text = 'товара';
  }
  console.log(buttonToggle)
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
      <ToggleButtonsGroup 
        firstIcon={<ListIcon 
          size={28}
          color="currentColor"
        />}
        secondIcon={<ImageIcon 
          size={28}
          color="currentColor"
        />}
        selectedOption={buttonToggle}
        onOptionChange={setButtonToggle}
      />
    </header>
  )
};

export default Header;