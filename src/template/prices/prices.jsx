import { useState } from 'react';
import { Document, Packer, PageOrientation } from "docx";
import { saveAs } from 'file-saver';

import CreateButton from '../../ui/create-button/create-button';
import { LABEL_CREATE_BUTTON, LABEL_DISABLED_BUTTON } from '../../contexts/constant';
import createTable from './create-table';

const Prices = ({ data, value }) => {
  const [disabled, setDisabled] = useState(false);
  const generateWordDocument = (dataObject, valueObject) => {
    const doc = new Document({
      sections: [{
        properties: {
          page: {
            size: {
              width: 11906,
              height: 16838,
              orientation: PageOrientation.PORTRAIT,
            },
            margin: {
              top: 250,
              left: 250,
              bottom: 100,
              right: 250,
            },
          },
        },
        children: createTable(dataObject, valueObject)
      }]
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, `${value.value}.docx`);
      setDisabled(false);
    });
  };

  const handleDoc = () => {
    setDisabled(true);
    generateWordDocument(data, value);
  };

  return (
    <CreateButton 
      disabled={disabled}
      handleDoc={handleDoc} 
      labelCreate={LABEL_CREATE_BUTTON}
      labelDisabled={LABEL_DISABLED_BUTTON}
    />
  );
};

export default Prices;