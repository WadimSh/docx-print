import React, { useState } from 'react';
import { Document, Packer, PageOrientation } from "docx";
import { saveAs } from 'file-saver';

import CreateButton from '../../ui/create-button/create-button';
import { LABEL_CREATE_BUTTON, LABEL_DISABLED_BUTTON } from '../../contexts/constant';
import createTable from './create-table';

const SmallPrices = ({ data }) => {
  const [disabled, setDisabled] = useState(false);
  const generateWordDocument = (dataObject) => {
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
              top: 300,
              left: 250,
              bottom: 300,
              right: 250,
            },
          },
        },
        children: createTable(dataObject)
      }]
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "small-prices.docx");
      setDisabled(false);
    });
  };

  const handleDoc = () => {
    setDisabled(true);
    generateWordDocument(data);
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

export default SmallPrices;