import { useContext, useState } from "react";
//import { saveAs } from 'file-saver';

import { MainContext } from "../../contexts/contexts";
import ToggleButtons from "../../ui/toggle-buttons/toggle-buttons";
import { ImageIcon, ListIcon } from "../../ui/icons";

const Header = ({ buttonToggle, setButtonToggle }) => {

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
      <ToggleButtons 
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